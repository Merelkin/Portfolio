import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const experience = [
	{
		period: 'Октябрь 2024 — настоящее время',
		place: 'Ресторан Felice',
		position: 'Бармен',
		description: 'Работа за барной стойкой, обслуживание гостей, приготовление напитков.',
	},
	{
		period: 'Январь 2022 — настоящее время',
		place: 'Фрилансер',
		position: 'Frontend/Web-разработчик',
		description:
			'Создание сайтов и веб-приложений, проекты на Tilda, Junior разработчик на Python, JS, Node.js. Небольшой опыт работы с React, Next.js, PHP.',
	},
	{
		period: 'Август 2024 — Октябрь 2024',
		place: 'Ресторан Zina, ресторан NONNA (Chef Group)',
		position: 'Бармен',
		description: '3 месяца в ресторане ZINNA, 1 месяц в ресторане NONNA.',
	},
	{
		period: 'Сентябрь 2023 — Июль 2024',
		place: 'The Ritz-Carlton, Astana',
		position: 'Bartender, Barista',
		description:
			'Работа в лобби-баре и ресторане отеля, частичный закуп, инвентаризация, ревизия, работа по бару и нормам санпина.',
	},
	{
		period: 'Ноябрь 2023 — Март 2024',
		place: 'IceBar Amsterdam (Нидерланды)',
		position: 'Junior Bartender',
		description:
			'Работа по программе обмена, 3 месяца на позиции junior bartender в уникальном ледяном баре.',
	},
	{
		period: 'Апрель 2023 — Сентябрь 2023',
		place: 'AlmaWine',
		position: 'Бармен',
		description: 'Работа за барной стойкой, обслуживание гостей, приготовление напитков.',
	},
	{
		period: 'Февраль 2021 — Март 2023',
		place: 'Starbucks Coffee',
		position: 'Бариста, Старший смены',
		description: 'Обслуживание гостей, обучение персонала, контроль качества.',
	},
	{
		period: 'Июль 2019 — Январь 2021',
		place: 'Costa Coffee',
		position: 'Бариста',
		description: 'Приготовление кофе, обслуживание гостей, поддержание чистоты на рабочем месте.',
	},
];

function getDuration(period: string): string {
	// Пример: 'Январь 2022 — настоящее время' или 'Август 2024 — Октябрь 2024'
	const months = [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	];
	const [start, end] = period.split(' — ').map(s => s.trim());
	const parse = (str: string) => {
		if (str === 'настоящее время') return new Date();
		const [m, y] = str.split(' ');
		const month = months.findIndex(mon => mon.toLowerCase() === m.toLowerCase());
		return new Date(Number(y), month > -1 ? month : 0, 1);
	};
	const d1 = parse(start);
	const d2 = parse(end);
	let monthsDiff = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
	if (monthsDiff < 0) monthsDiff = 0;
	const years = Math.floor(monthsDiff / 12);
	const monthsLeft = monthsDiff % 12;
	let res = '';
	if (years > 0) res += years + ' ' + (years === 1 ? 'год' : years < 5 ? 'года' : 'лет');
	if (monthsLeft > 0) res += (res ? ' ' : '') + monthsLeft + ' мес.';
	return res || 'меньше месяца';
}

const ExperienceSection: React.FC = () => (
	<section id="experience" className="section animate-fade-in">
		<Container>
			<h2 className="section-title text-center mb-5">Опыт</h2>
			<Row className="g-4">
				{experience.map((job, idx) => (
					<Col md={6} key={idx}>
						<div
							className="custom-card h-100"
							style={{ borderLeft: '6px solid #4f8cff' }}
						>
							<h5 className="mb-1 text-primary">{job.position}</h5>
							<div className="fw-bold mb-2">{job.place}</div>
							<div className="text-secondary mb-2">
								{job.period}{' '}
								<span style={{ color: '#00b894', fontWeight: 500 }}>
									{getDuration(job.period)}
								</span>
							</div>
							<div>{job.description}</div>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	</section>
);

export default ExperienceSection;
