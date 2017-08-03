import store from '../store'
import $ from 'jquery'


export function getData() {

  $.getJSON('API-URL', function(data) { 
    store.dispatch({
      type: 'GET_DATA',
      action: data.results
    })
  })
}
