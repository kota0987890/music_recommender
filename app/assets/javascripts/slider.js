// app/assets/javascripts/sliders.js
$(function () {
  // スライダー用div要素を取得
  var popularitySlider = document.getElementById('popularity-slider');
  var livenessSlider = document.getElementById('liveness-slider');
  var danceabilitySlider = document.getElementById('danceability-slider');
  var acousticnessSlider = document.getElementById('acousticness-slider');
  var energySlider = document.getElementById('energy-slider');
  var speechinessSlider = document.getElementById('speechiness-slider');
  var valenceSlider = document.getElementById('valence-slider');
  // 隠しフィールド要素を取得
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
  var speechinessMin = document.getElementById('speechiness_min');
  var speechinessMax = document.getElementById('speechiness_max');
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
  
  noUiSlider.create(speechinessSlider, {
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

  // updateイベントで隠しフィールドに値をセット
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
  
  speechinessSlider.noUiSlider.on('update', function (values, handle) {
    speechinessMin.value = values[0];
    speechinessMax.value = values[1];
  });
  
  valenceSlider.noUiSlider.on('update', function (values, handle) {
    valenceMin.value = values[0];
    valenceMax.value = values[1];
  });
});