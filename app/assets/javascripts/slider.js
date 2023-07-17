$(function () {
  var popularitySlider = document.getElementById('popularity-slider');
  var livenessSlider = document.getElementById('liveness-slider');
  var danceabilitySlider = document.getElementById('danceability-slider');
  var acousticnessSlider = document.getElementById('acousticness-slider');
  var energySlider = document.getElementById('energy-slider');
  var instrumentalnessSlider = document.getElementById('instrumentalness-slider');
  var valenceSlider = document.getElementById('valence-slider');

  var popularityMin = document.getElementById('popularity_min');
  var popularityMax = document.getElementById('popularity_max');
  var livenessMin = document.getElementById('liveness_min');
  var livenessMax = document.getElementById('liveness_max');
  var danceabilityMin = document.getElementById('danceability_min');
  var danceabilityMax = document.getElementById('danceability_max');
  var acousticnessMin = document.getElementById('acousticness_min');
  var acousticnessMax = document.getElementById('acousticness_max');
  var energyMin = document.getElementById('energy_min');
  var energyMax = document.getElementById('energy_max');
  var instrumentalnessMin = document.getElementById('instrumentalness_min');
  var instrumentalnessMax = document.getElementById('instrumentalness_max');
  var valenceMin = document.getElementById('valence_min');
  var valenceMax = document.getElementById('valence_max');

  noUiSlider.create(popularitySlider, {
    range: {
      'min': 0,
      'max': 100
    },
    start: [0, 100],
    step: 1,
    tooltips: true,
    connect: true,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return Number(value);
      }
    }
  });
  
  noUiSlider.create(livenessSlider, {
    range: {
      'min': 0,
      'max': 100
    },
    start: [0, 100],
    step: 1,
    tooltips: true,
    connect: true,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return Number(value);
      }
    }
  });
  
  noUiSlider.create(danceabilitySlider, {
    range: {
      'min': 0,
      'max': 100
    },
    start: [0, 100],
    step: 1,
    tooltips: true,
    connect: true,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return Number(value);
      }
    }
  });
  
  noUiSlider.create(acousticnessSlider, {
    range: {
      'min': 0,
      'max': 100
    },
    start: [0, 100],
    step: 1,
    tooltips: true,
    connect: true,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return Number(value);
      }
    }
  });
  
  noUiSlider.create(energySlider, {
    range: {
      'min': 0,
      'max': 100
    },
    start: [0, 100],
        step: 1,
    tooltips: true,
    connect: true,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return Number(value);
      }
    }
  });
  
  noUiSlider.create(instrumentalnessSlider, {
    range: {
      'min': 0,
      'max': 100
    },
    start: [0, 100],
    step: 1,
    tooltips: true,
    connect: true,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return Number(value);
      }
    }
  });
  
  noUiSlider.create(valenceSlider, {
    range: {
      'min': 0,
      'max': 100
    },
    start: [0, 100],
    step: 1,
    tooltips: true,
    connect: true,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return Number(value);
      }
    }
  });

  popularitySlider.noUiSlider.on('update', function (values, handle) {
    popularityMin.value = values[0];
    popularityMax.value = values[1];
  });
  
  livenessSlider.noUiSlider.on('update', function (values, handle) {
    livenessMin.value = values[0];
    livenessMax.value = values[1];
  });
  
  danceabilitySlider.noUiSlider.on('update', function (values, handle) {
    danceabilityMin.value = values[0];
    danceabilityMax.value = values[1];
  });
  
  acousticnessSlider.noUiSlider.on('update', function (values, handle) {
    acousticnessMin.value = values[0];
    acousticnessMax.value = values[1];
  });
  
  energySlider.noUiSlider.on('update', function (values, handle) {
    energyMin.value = values[0];
    energyMax.value = values[1];
  });
  
  instrumentalnessSlider.noUiSlider.on('update', function (values, handle) {
    instrumentalnessMin.value = values[0];
    instrumentalnessMax.value = values[1];
  });
  
  valenceSlider.noUiSlider.on('update', function (values, handle) {
    valenceMin.value = values[0];
    valenceMax.value = values[1];
  });

  function getQueryParams() {
    var params = {};
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      params[pair[0]] = pair[1];
    }
    return params;
  }

  function setSliderValues() {
    var params = getQueryParams();
    if (params.popularity_min) {
      popularitySlider.noUiSlider.set([params.popularity_min, null]);
    }
    if (params.popularity_max) {
      popularitySlider.noUiSlider.set([null, params.popularity_max]);
    }
    if (params.liveness_min) {
      livenessSlider.noUiSlider.set([params.liveness_min, null]);
    }
    if (params.liveness_max) {
      livenessSlider.noUiSlider.set([null, params.liveness_max]);
    }
    if (params.danceability_min) {
      danceabilitySlider.noUiSlider.set([params.danceability_min, null]);
    }
    if (params.danceability_max) {
      danceabilitySlider.noUiSlider.set([null, params.danceability_max]);
    }
    if (params.acousticness_min) {
      acousticnessSlider.noUiSlider.set([params.acousticness_min, null]);
    }
    if (params.acousticness_max) {
      acousticnessSlider.noUiSlider.set([null, params.acousticness_max]);
    }
    if (params.energy_min) {
      energySlider.noUiSlider.set([params.energy_min, null]);
    }
    if (params.energy_max) {
      energySlider.noUiSlider.set([null, params.energy_max]);
    }
    if (params.instrumentalness_min) {
      instrumentalnessSlider.noUiSlider.set([params.instrumentalness_min, null]);
    }
    if (params.instrumentalness_max) {
      instrumentalnessSlider.noUiSlider.set([null, params.instrumentalness_max]);
    }
    if (params.valence_min) {
      valenceSlider.noUiSlider.set([params.valence_min, null]);
    }
    if (params.valence_max) {
      valenceSlider.noUiSlider.set([null, params.valence_max]);
    }
  }

  function updateQueryParams() {
    var params = getQueryParams();
    params.popularity_min = popularityMin.value;
    params.popularity_max = popularityMax.value;
    params.liveness_min = livenessMin.value;
    params.liveness_max = livenessMax.value;
    params.danceability_min = danceabilityMin.value;
    params.danceability_max = danceabilityMax.value;
    params.acousticness_min = acousticnessMin.value;
    params.acousticness_max = acousticnessMax.value;
    params.energy_min = energyMin.value;
    params.energy_max = energyMax.value;
    params.instrumentalness_min = instrumentalnessMin.value;
    params.instrumentalness_max = instrumentalnessMax.value;
    params.valence_min = valenceMin.value;
    params.valence_max = valenceMax.value;
  
    var query = '';
    for (var key in params) {
      query += key + '=' + params[key] + '&';
    }

  query = query.slice(0, -1);

  window.history.replaceState(null, null, '?' + query);
  }

  $(document).ready(function () {
  setSliderValues();
  });

  popularitySlider.noUiSlider.on('change', function () {
  updateQueryParams();
  });
  
  livenessSlider.noUiSlider.on('change', function () {
  updateQueryParams();
  });
  
  danceabilitySlider.noUiSlider.on('change', function () {
  updateQueryParams();
  });
  
  acousticnessSlider.noUiSlider.on('change', function () {
  updateQueryParams();
  });
  
  energySlider.noUiSlider.on('change', function () {
  updateQueryParams();
  });
  
  instrumentalnessSlider.noUiSlider.on('change', function () {
  updateQueryParams();
  });
  
  valenceSlider.noUiSlider.on('change', function () {
  updateQueryParams();
  });
});