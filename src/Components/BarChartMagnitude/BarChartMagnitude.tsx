import { Bar } from 'react-chartjs-2';
import {Feature} from "../../../types/feature";
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

type Props = {
    disasters: Feature[] | null;
};

export const BarChartMagnitude: React.FC<Props> = ({ disasters }) => {

    function formatDate(date: Date) {
        const options = {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        };
        // @ts-ignore
        return new Intl.DateTimeFormat("en-US", options).format(date);
    }

    const chartData = {
        labels: disasters?.map(disaster => (formatDate(new Date(disaster.properties.time))).toString()),
        datasets: [
            {
                label: 'Earthquakes',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.6)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: disasters?.map(disaster => disaster.properties.mag),
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
                style={{height: '60vh'}}
            />
        </div>
    );
}
