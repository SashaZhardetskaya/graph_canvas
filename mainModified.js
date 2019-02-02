window.onload = function() {

  var canvas = document.getElementById('viewport');
  var ctx = canvas.getContext('2d');

  // Массив узлов, каждый узел задается объектом с координатами и id картинки для отображения.
  var userNode = {
    x: 300,
    y: 100,
    id: 'picture_a'
  };
  var nodes = {
    // trackerA: {
    //   x: 300,
    //   y: 100,
    //   id: 'picture_c',
    //   websites: [
    //     {
    //       x: 300,
    //       y: 50,
    //       id: 'picture_b'
    //     }, {
    //       x: 200,
    //       y: 100,
    //       id: 'picture_b'
    //     }, {
    //       x: 400,
    //       y: 100,
    //       id: 'picture_b'
    //     }
    //   ]
    // },
    // trackerB: {
    //   x: 300,
    //   y: 100,
    //   id: 'picture_c',
    //   websites: [
    //     {
    //       x: 300,
    //       y: 50,
    //       id: 'picture_b'
    //     }, {
    //       x: 200,
    //       y: 100,
    //       id: 'picture_b'
    //     }, {
    //       x: 400,
    //       y: 100,
    //       id: 'picture_b'
    //     }
    //   ]
    // },
    pacA: [
      {
        x: 300,
        y: 50,
        id: 'picture_a'
      }, {
        x: 200,
        y: 100,
        id: 'picture_b'
      }, {
        x: 400,
        y: 100,
        id: 'picture_c'
      }
    ],
    pacB: [
      {
        x: 300,
        y: 250,
        id: 'picture_a'
      }, {
        x: 200,
        y: 300,
        id: 'picture_b'
      }, {
        x: 400,
        y: 300,
        id: 'picture_c'
      }
    ]
  };

  // Массив связей между узлами. Каждый элемент это массив из двух элементов - индексов узлов.
  var links = [
    [0, 1],
    [0, 2]
  ];

  // Отрисовка канвы.
  var render = function() {

    // Очищаем канву.
    ctx.fillStyle = "#f3f3f3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Рисуем связи между узлами (раньше чем сами узлы, чтобы они отображались позади узлов).
    links.forEach(function(link) {
      var i0 = link[0];
      var i1 = link[1];

      ctx.fillStyle = "#000";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(nodes.pacA[i0].x, nodes.pacA[i0].y);
      ctx.lineTo(nodes.pacA[i1].x, nodes.pacA[i1].y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(nodes.pacB[i0].x, nodes.pacB[i0].y);
      ctx.lineTo(nodes.pacB[i1].x, nodes.pacB[i1].y);
      ctx.stroke();
    });

    // Рисуем узлы.
    for (var node in nodes) {
      nodes[node].forEach(function(singleNode) {
        var img = document.getElementById(singleNode.id),
          halfWidth = img.naturalWidth / 2,
          halfHeight = img.naturalHeight / 2;
        ctx.drawImage(img, singleNode.x - halfWidth, singleNode.y - halfHeight);
      });
    }
  };

  render();
};