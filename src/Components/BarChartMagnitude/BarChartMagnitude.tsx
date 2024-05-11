import { Bar } from 'react-chartjs-2';
import {Feature} from "../../../types/feature";
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

type Props = {
    disasters: Feature[] | null;
};

export const BarChartMagnitude: React.FC<Props> = ({ disasters }) => {
    console.log(disasters?.map(disaster => disaster.properties.mag))
    const chartData = {
        labels: disasters?.map(disaster => disaster.properties.time).slice(0, 30),
        datasets: [
            {
                label: 'Data',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.6)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: disasters?.map(disaster => disaster.properties.mag).slice(0, 30),
            },
        ],
    };

    return (
        <div>
            <Bar
                data={chartData}
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false,
                }}
                style={{height: '100vh'}}
            />
        </div>
    );
}
