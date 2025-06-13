function runSimulation() {
  const tasks = [
    { id: 'A', duration: 3 },
    { id: 'B', duration: 2 },
    { id: 'C', duration: 4 },
    { id: 'D', duration: 1 },
    { id: 'E', duration: 2 }
  ];

  const robots = [
    { id: 'R1', availableAt: 0, schedule: [] },
    { id: 'R2', availableAt: 0, schedule: [] },
    { id: 'R3', availableAt: 0, schedule: [] }
  ];

  tasks.forEach(task => {
    const robot = robots.reduce((prev, curr) =>
      prev.availableAt <= curr.availableAt ? prev : curr
    );
    const start = robot.availableAt;
    const end = start + task.duration;
    robot.schedule.push(`${task.id} (${start}-${end})`);
    robot.availableAt = end;
  });

  const tbody = document.getElementById('schedule').querySelector('tbody');
  tbody.innerHTML = '';
  robots.forEach(robot => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = robot.id;
    const taskCell = document.createElement('td');
    taskCell.textContent = robot.schedule.join(', ');
    row.appendChild(nameCell);
    row.appendChild(taskCell);
    tbody.appendChild(row);
  });
}
