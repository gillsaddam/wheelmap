Wheelmap.NodesEditRoute = Wheelmap.FakeMapRoute.extend
  beforeModel: (transition)->
    transition.send('authenticate', transition)

  model: (params)->
    @modelFor('nodes')

  setupController: (controller, model, queryParams)->
    @_super(controller, model, queryParams)

    @store.findAll('category').then (categories)->
      controller.set('categories', categories)