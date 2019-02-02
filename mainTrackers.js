window.onload = function() {

  var canvas = document.getElementById('viewport');
  var ctx = canvas.getContext('2d');

  // Массив узлов, каждый узел задается объектом с координатами и id картинки для отображения.
  var userNode = {
    x: 300,
    y: 300,
    id: 'picture_a'
  };
  var trackers = [
    {
      name: 'trackerA',
      x: 400,
      y: 100,
      id: 'picture_c',
      websites: [
        {
          x: 300,
          y: 200,
          id: 'picture_b'
        }, {
          x: 380,
          y: 200,
          id: 'picture_b'
        }, {
          x: 460,
          y: 200,
          id: 'picture_b'
        }
      ]
    },
    {
      name: 'trackerB',
      x: 200,
      y: 500,
      id: 'picture_c',
      websites: [
        {
          x: 200,
          y: 400,
          id: 'picture_b'
        }, {
          x: 280,
          y: 400,
          id: 'picture_b'
        }, {
          x: 360,
          y: 400,
          id: 'picture_b'
        }
      ]
    }
  ];

  // Отрисовка канвы.
  var render = function() {

    // Очищаем канву.
    ctx.fillStyle = "#f3f3f3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Рисуем узлы.
    trackers.forEach(function(tracker) {
      tracker.websites.forEach(function (website) {
        var websiteImg = document.getElementById(website.id);
        var halfWidth = websiteImg.naturalWidth / 2;
        var halfHeight = websiteImg.naturalHeight / 2;

        ctx.fillStyle = "#000";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(userNode.x, userNode.y);
        ctx.lineTo(website.x, website.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(website.x, website.y);
        ctx.lineTo(tracker.x, tracker.y);
        ctx.stroke();

        ctx.drawImage(websiteImg, website.x - halfWidth, website.y - halfHeight);

      });

      var trackerImg = document.getElementById(tracker.id);
      var halfWidth = trackerImg.naturalWidth / 2;
      var halfHeight = trackerImg.naturalHeight / 2;
      ctx.drawImage(trackerImg, tracker.x - halfWidth, tracker.y - halfHeight);
    });

    var userImg = document.getElementById(userNode.id);
    var halfWidth = userImg.naturalWidth / 2;
    var halfHeight = userImg.naturalHeight / 2;
    ctx.drawImage(userImg, userNode.x - halfWidth, userNode.y - halfHeight);

  };

  render();
};