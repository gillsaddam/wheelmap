require 'yaml'
require 'librato/metrics'
metrics_config_file = Rails.root.join('config', 'metrics.yml')

if !Rails.env.test? && File.exists?(metrics_config_file)
  metrics_config = YAML.load_file(metrics_config_file)[Rails.env]
  Librato::Metrics.authenticate(metrics_config['email'], metrics_config['api_key'])
  hostname = `hostname`.gsub(/\n/, '')
  LIBRATO_QUEUE = Librato::Metrics::Aggregator.new(:autosubmit_interval => 10, :source => hostname)
else
  LIBRATO_QUEUE = nil
end