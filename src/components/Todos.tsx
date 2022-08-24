import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { todosProps } from '../utils/interface';

type Props = {
  todos: todosProps[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  type: 'horizontalBar',
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function Todos({ todos }: Props) {
  const titleArr = todos.map(
    (todo: todosProps) => todo.title.split(' ').join('').length
  );

  const data = {
    labels: todos.map((x: todosProps) => x.id), // 2022/01 2022/03
    datasets: [
      {
        label: `Todos`,
        backgroundColor: '#00171F',
        data: titleArr.map((x: number) => x),
      },
    ],
  };

  return (
    <>
        <h2 className="todosTitle">Todos</h2>
        <Bar data={data} />
    </>
  );
}

export default Todos;
