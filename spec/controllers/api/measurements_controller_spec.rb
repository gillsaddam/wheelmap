require 'rails_helper'

describe Api::MeasurementsController do
  let(:user) { FactoryGirl.create(:user) }

  let :valid_door_metadata do
    {
      'data_type': 'door',
      'description': 'Some user description',
      'data': {
        'width': 1.04
      }
    }
  end

  let :door_metadata_with_empty_description do
    {
      'data_type': 'door',
      'description': '',
      'data': {
        'width': 1.04
      }
    }
  end

  let :door_metadata_without_description do
    {
      'data_type': 'door',
      'data': {
        'width': 1.04
      }
    }
  end

  let :valid_steps_metadata do
    {
      'data_type': 'steps',
      'description': 'Some user description',
      'data': {
        'height': 0.11
      }
    }
  end

  let :valid_ramp_metadata do
    {
      'data_type': 'ramp',
      'description': 'Some user description',
      'data': {
        'angle': 15.42
      }
    }
  end

  let :valid_toilet_metadata do
    {
      'data_type': 'toilet',
      'description': 'Some user description',
      'data': {
        'width': 5.00,
        'length': 5.00,
        'area': 25.00
      }
    }
  end

  describe 'create action' do
    let(:poi) { Poi.first }

    def json_response
      JSON.parse(response.body)
    end

    before do
      FactoryGirl.create(:poi)
    end

    before :all do
      User.delete_all
    end

    describe 'image upload' do
      context 'with valid params' do
        before do
          post(:create, node_id: poi.id, api_key: user.authentication_token, photo: fixture_file_upload('/placeholder.jpg'))
        end

        it 'creates a photo associated with the poi' do
          expect(poi.photos.count).to eq 1
        end

        it 'creates a photo with the current user assigned' do
          photo = poi.photos.first
          expect(photo.user).to eq user
        end

        describe 'the response' do
          it 'has status 201 Created' do
            expect(response.status).to eql 201
          end

          it 'returns id' do
            photo = poi.photos.first
            expect(json_response['id']).to eq photo.id
          end
        end
      end

      context 'with missing image' do
        before do
          post(:create, node_id: poi.id, api_key: user.authentication_token)
        end

        it 'returns 400 Bad Request' do
          expect(response.status).to eq 400
        end

        specify 'the error message indicates that the image is missing' do
          expect(json_response['error']).to eq 'photo is missing'
        end

        it 'does not save a new photo for the poi' do
          expect(poi.photos.count).to eq 0
        end
      end

      context 'with missing api key' do
        before do
          post(:create, node_id: poi.id, photo: fixture_file_upload('/placeholder.jpg'))
        end

        it 'returns 401 Unauthorized' do
          expect(response.status).to eq 401
        end

        it 'does not save a new photo for the poi' do
          expect(poi.photos.count).to eq 0
        end
      end

      context 'with invalid api key' do
        before do
          post(:create, node_id: poi.id, api_key: '12354645543534534', photo: fixture_file_upload('/placeholder.jpg'))
        end

        it 'does not save a new photo for the poi' do
          expect(poi.photos.count).to eq 0
        end

        it 'returns 401 Unauthorized' do
          expect(response.status).to eq 401
        end
      end

      context 'with non existant node' do
        before do
          post(:create, node_id: 999_999, api_key: user.authentication_token, photo: fixture_file_upload('/placeholder.jpg'))
        end

        it 'returns 404' do
          expect(response.status).to eq 404
        end

        it 'does not save a new measurement' do
          expect(poi.photos.count).to eq 0
        end
      end
    end
  end

  describe 'add metadata for image' do
    let(:poi) { FactoryGirl.create(:poi, photos: [FactoryGirl.create(:photo, user: user)]) }
    let(:picture) { poi.photos.first }

    it 'returns 404 if the node is not available' do
      post(:add_metadata, node_id: 404, measurement_id: picture.id, api_key: user.authentication_token, metadata: valid_door_metadata)
      expect(response.status).to eq 404
    end

    it 'returns 404 if the measurement is not available' do
      post(:add_metadata, node_id: poi.id, measurement_id: 404, api_key: user.authentication_token, metadata: valid_door_metadata)
      expect(response.status).to eq 404
    end

    describe 'doors' do
      let(:picture) { poi.photos.first }

      context 'with all fields holding a value' do
        before do
          post(:add_metadata, metadata: valid_door_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, format: :json)
        end

        it 'accepts valid json' do
          expect(response.status).to eq 201
        end

        describe 'metadata' do
          let(:measurement) { picture.measurements.first }
          let(:data_point) { measurement.datapoints.first }

          it 'stores exactly one measurement' do
            expect(picture.measurements.length).to eq 1
          end

          it 'stores exactly one datapoint' do
            expect(measurement.datapoints.length).to eq 1
          end

          it 'has meters as unit' do
            expect(data_point.unit).to eq 'meters'
          end

          it 'has correct value' do
            expect(data_point.value).to eq 1.04
          end

          it 'has correct name' do
            expect(data_point.property).to eq 'width'
          end
        end
      end

      context 'with empty description' do
        let(:measurement) { picture.measurements.first }
        let(:data_point) { measurement.datapoints.first }

        before do
          post(:add_metadata, metadata: door_metadata_with_empty_description, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, format: :json)
        end

        it 'returns 201 status code' do
          expect(response.status).to eq 201
        end

        it 'stores a new measurement' do
          expect(picture.measurements.length).to eq 1
        end

        it 'stores a new measurement with an empty description' do
          expect(measurement.description.length).to eq 0
        end

        it 'stores exactly one datapoint' do
          expect(measurement.datapoints.length).to eq 1
        end
      end

      context 'without description' do
        let(:measurement) { picture.measurements.first }
        let(:data_point) { measurement.datapoints.first }

        before do
          post(:add_metadata, metadata: door_metadata_without_description, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, format: :json)
        end

        it 'returns 201 status code' do
          expect(response.status).to eq 201
        end

        it 'stores a new measurement' do
          expect(picture.measurements.length).to eq 1
        end

        it 'stores a new measurement with an empty description' do
          expect(measurement.description).to be nil
        end

        it 'stores exactly one datapoint' do
          expect(measurement.datapoints.length).to eq 1
        end
      end

      context 'with invalid metadata' do
        let :without_description do
          {
            'data_type': 'door',
            'data': {
              'width': 1.04
            }
          }
        end

        let :without_data_type do
          {
            'description': 'Some user description',
            'data': {
              'width': 1.04
            }
          }
        end

        let :without_data do
          {
            'data_type': 'door',
            'description': 'Some user description'
          }
        end

        let :without_width do
          {
            'data_type': 'door',
            'description': 'Some user description',
            'data': {
            }
          }
        end

        let :wrong_width_value do
          {
            'data_type': 'door',
            'description': 'Some user description',
            'data': {
              'width': 'faafafaf'
            }
          }
        end

        let :wrong_data_argument do
          {
            'data_type': 'door',
            'description': 'Some user description',
            'data': {
              'area': 23.42
            }
          }
        end

        it 'returns 422 when data_type is missing' do
          post(:add_metadata, metadata: without_data_type, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token)
          expect(response.status).to eq 422
        end

        it 'returns 422 when data is missing' do
          post(:add_metadata, metadata: without_data, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token)
          expect(response.status).to eq 422
        end

        it 'returns 422 when when width is missing' do
          post(:add_metadata, metadata: without_width, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token)
          expect(response.status).to eq 422
        end

        it 'returns 422 when when width has the wrong value' do
          post(:add_metadata, metadata: wrong_width_value, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token)
          expect(response.status).to eq 422
        end

        it 'returns 422 when wrong data key is passed' do
          post(:add_metadata, metadata: wrong_data_argument, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token)
          expect(response.status).to eq 422
        end

        it 'returns a list of errors' do
          post(:add_metadata, metadata: wrong_data_argument, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token)
          errors = JSON.parse(response.body)
          expect(errors.key?('errors')).to be true
        end
      end
    end

    describe 'steps' do
      let(:picture) { poi.photos.first }

      context 'width valid metadata' do
        before do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: valid_steps_metadata)
        end

        it 'accepts valid json' do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: valid_steps_metadata)
          expect(response.status).to eq 201
        end

        describe 'metadata' do
          let(:measurement) { picture.measurements.first }
          let(:data_point) { measurement.datapoints.first }

          it 'stores exactly one measurement' do
            expect(picture.measurements.length).to eq 1
          end

          it 'stores exactly one datapoint' do
            expect(measurement.datapoints.length).to eq 1
          end

          it 'has meters as unit' do
            expect(data_point.unit).to eq 'meters'
          end

          it 'has correct value' do
            expect(data_point.value).to eq 0.11
          end

          it 'has correct name' do
            expect(data_point.property).to eq 'height'
          end
        end
      end
      context 'with invalid metadata' do
        let :wrong_data_argument do
          {
            'data_type': 'steps',
            'description': 'Some user description',
            'data': {
              'area': 23.42
            }
          }
        end

        it 'returns 422 when wrong key is passed' do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: wrong_data_argument)
          expect(response.status).to eq 422
        end
      end
    end

    describe 'ramp' do
      context 'with valid metadata' do
        before do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: valid_ramp_metadata)
        end

        it 'accepts valid json' do
          expect(response.status).to eq 201
        end

        describe 'metadata' do
          let(:measurement) { picture.measurements.first }
          let(:data_point) { measurement.datapoints.first }

          it 'stores exactly one measurement' do
            expect(picture.measurements.length).to eq 1
          end

          it 'stores exactly one datapoint' do
            expect(measurement.datapoints.length).to eq 1
          end

          it 'has degrees as unit' do
            expect(data_point.unit).to eq 'degrees'
          end

          it 'has correct value' do
            expect(data_point.value).to eq 15.42
          end

          it 'has correct name' do
            expect(data_point.property).to eq 'angle'
          end
        end
      end

      context 'with invalid metadata' do
        let :wrong_data_argument do
          {
            'data_type': 'ramp',
            'description': 'Some user description',
            'data': {
              'area': 23.42
            }
          }
        end

        it 'returns 422 when wrong key is passed' do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: wrong_data_argument)
          expect(response.status).to eq 422
        end

        it 'returns a list of errors' do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: wrong_data_argument)
          errors = JSON.parse(response.body)
          expect(errors.key?('errors')).to be true
        end
      end
    end

    describe 'toilets' do
      context 'with valid metadata' do
        before do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: valid_toilet_metadata)
        end

        it 'accepts valid json' do
          expect(response.status).to eq 201
        end

        describe 'metadata' do
          let(:measurement) { picture.measurements.first }
          let(:width_data_point) { measurement.datapoints.find { |p| p.property == 'width' } }
          let(:length_data_point) { measurement.datapoints.find { |p| p.property == 'length' } }
          let(:area_data_point) { measurement.datapoints.find { |p| p.property == 'area' } }

          it 'stores exactly one measurement' do
            expect(picture.measurements.length).to eq 1
          end

          it 'stores three data points' do
            expect(measurement.datapoints.length).to eq 3
          end

          describe 'width' do
            it 'has meters as unit' do
              expect(width_data_point.unit).to eq 'meters'
            end

            it 'has correct value' do
              expect(width_data_point.value).to eq 5.00
            end
          end

          describe 'length' do
            it 'has meters as unit' do
              expect(length_data_point.unit).to eq 'meters'
            end

            it 'has correct value' do
              expect(length_data_point.value).to eq 5.00
            end
          end

          describe 'area' do
            it 'has square meters as unit' do
              expect(area_data_point.unit).to eq 'square meters'
            end

            it 'has correct value' do
              expect(area_data_point.value).to eq 25.00
            end
          end
        end
      end
      context 'with invalid metadata' do
        let :without_width do
          {
            'data_type': 'toilet',
            'description': 'Some user description',
            'data': {
              'length': 5.00,
              'area': 25.00
            }
          }
        end

        let :with_invalid_datapoint do
          {
            'data_type': 'toilet',
            'description': 'Some user description',
            'data': {
              'foo': 45.0,
              'length': 5.00,
              'area': 25.00
            }
          }
        end

        let :with_empty_data do
          {
            'data_type': 'toilet',
            'description': 'Some user description',
            'data': {
            }
          }
        end

        it 'returns 422 when data is empty' do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: with_empty_data)
          expect(response.status).to eq 422
        end

        it 'returns 422 when width is missing' do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: without_width)
          expect(response.status).to eq 422
        end

        it 'does not save a new measurement to database when width is missing' do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: without_width)
          expect(picture.measurements.length).to eq 0
        end

        it 'returns 422 when invalid data point is passed' do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: with_empty_data)
          expect(response.status).to eq 422
        end

        it 'returns a list of errors' do
          post(:add_metadata, node_id: poi.id, measurement_id: picture.id, api_key: user.authentication_token, metadata: with_empty_data)
          errors = JSON.parse(response.body)
          expect(errors.key?('errors')).to be true
        end
      end
    end
  end
end
