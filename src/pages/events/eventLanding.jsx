import React, { useEffect, useState } from "react";
import styles from './eventLanding.module.scss'
import {getEvents} from './../../services/eventServices.js';
import { Link, useNavigate } from 'react-router-dom'




const EventCard = ({ title, imageAlt, onClick }) => (
	<div className={styles.card} onClick={onClick}>
		<div className={styles.cardMedia} aria-hidden>
			{/* show poster image when available */}
			{typeof imageAlt === 'string' && imageAlt ? (
				<img src={imageAlt} alt={title} className={styles.cardImage} />
			) : (
				<div className={styles.cardPlaceholder}>{imageAlt || 'No poster'}</div>
			)}
		</div>
		<div className={styles.cardBody}>
			<p className={styles.cardTitle}>{title}</p>
		</div>
	</div>
)

const EventLanding = () => {
	const [events, setEvents] = useState([]);
	const [activeEvent, setActiveEvent] = useState(null);
	const [pastEvents, setPastEvents] = useState([]);

	const navigate = useNavigate();

	const getPosterUrl = (poster) => {
		if (!poster) return null;
		if (typeof poster === 'string') return poster;
		if (typeof poster === 'object') {
			// common keys
			if (poster.image1) return poster.image1;
			if (poster.image2) return poster.image2;
			if (poster.url) return poster.url;
			if (poster.src) return poster.src;
			// fallback to first string value
			const first = Object.values(poster).find(v => typeof v === 'string');
			return first || null;
		}
		return null;
	}

	useEffect(() => {
		let mounted = true;

		async function loadEvents() {
			try {
				const data = await getEvents();
				if (!mounted) return;

				const list = data.events || [];

				setEvents(list);

				const active = list.find(ev => ev && ev.isLive === true) || null;
				setActiveEvent(active);

			                console.log("active event: ", active);

			                const past = list
					.filter(ev => ev && ev.isPast === true)
					.sort((a, b) => new Date(b.date) - new Date(a.date))
					.slice(0, 3);
						setPastEvents(past);

						console.log("past events: ", past);
			} catch (error) {
				console.error("Error occurred while fetching events ", error);
			}
		}

		loadEvents();
		return () => {
			mounted = false;
		};
	}, []);

	const handleClick = (id) =>{
		if(!id) return
		navigate(`/events/${id}`)
	}

	const activeId = activeEvent ? (activeEvent.id || activeEvent._id) : null

	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<h2 className={styles.sectionTitle}>UPCOMING EVENTS</h2>

					<div className={styles.upcomingGrid}>
						<div className={styles.infoCard}>
							<h3 className={styles.infoTitle}>{activeEvent ? activeEvent.title : "No active events"}</h3>
							<p className={styles.infoText}>{activeEvent ? activeEvent.description : "No active events"}</p>
							<div className={styles.infoActions}>
								<button className={styles.ctaButton}>Register</button>
								<button
									className={styles.secondaryButton}
									onClick={() => activeId ? handleClick(activeId) : console.log('No active event')}
								>
									Learn more
								</button>
							</div>
						</div>

						<div className={styles.posterCard}>
							<div className={styles.posterPlaceholder}>
								{activeEvent ? (
									(() => {
										const p = getPosterUrl(activeEvent.poster)
										return p ? <img src={p} alt={activeEvent.title || 'poster'} className={styles.posterImg} /> : 'No poster available'
									})()
								) : (
									'No poster available'
								)}
							</div>
						</div>
					</div>

				<div className={styles.sponsorsBanner}>
					<span className={styles.sponsorsText}>SPONSORS</span>
				</div>

				<div className={styles.pastHeader}>
					<h3 className={styles.sectionTitleSmall}>PAST EVENTS</h3>
					<Link to="/events" className={styles.viewAll}>VIEW ALL EVENTS</Link>
				</div>

				<div className={styles.pastGrid}>
					{(pastEvents.length ? pastEvents : [null, null, null]).map((ev, id) => {
						const posterUrl = ev ? getPosterUrl(ev.poster) : null
						const evId = ev ? (ev.id || ev._id) : null
						return (
							<EventCard
								key={id}
								title={ev ? ev.title : 'Past event not available'}
								imageAlt={posterUrl}
								onClick={() => evId ? handleClick(evId) : console.log('No event')}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default EventLanding
