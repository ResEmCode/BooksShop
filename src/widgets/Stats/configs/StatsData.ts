const dataObject = [
  { genre: 'Romantic', count: 4 },
  { genre: 'Tale', count: 2 }
];

export const data = {
  labels: dataObject.map((asset) => asset.genre),
  datasets: [
    {
      label: 'count',
      data: dataObject.map((asset) => asset.count),
      backgroundColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }
  ]
};
