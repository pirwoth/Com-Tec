import React, { useState, useRef, useEffect } from 'react';

const gallerySections = [
	{
		title: 'Digital Communication Systems',
		images: [
			'/assets/phone.jpeg',
			'/assets/phone2.jpeg',
			'/assets/phone3.jpeg',
			'/assets/phone5.jpeg',
			'/assets/phone6.jpg',
			'/assets/phone7.jpg',
			'assets/phone8.jpg',
			'/assets/phone9.jpeg',
			'/assets/phone10.jpg',
			'/assets/system.jpeg',
			'/assets/system2.jpg',
			'/assets/system4.jpeg',
			'/assets/system5.png',
		],
		description: 'Showcasing advanced PBX, IP telephony, and communication devices.',
	},
	{
		title: 'Security & Surveillance Systems',
		images: [
			'/assets/cam.jpeg',
			'/assets/cam0.jpeg',
			'/assets/cam02.jpeg',
			'/assets/cam1.jpeg',
			'/assets/cam2.jpeg',
			'/assets/cam3.jpeg',
			'/assets/cam5.jpeg',
			'/assets/cam6.jpeg',
			'/assets/cam7.jpg',
			'/assets/cam8.jpg',
			'/assets/cam9.jpg',
			'/assets/cam10.jpg',
			'/assets/cam12.jpg',
			'/assets/sec.jpeg',
			'/assets/sec1.jpeg',
			'/assets/sec2.jpeg',
			'/assets/sec3.jpeg',
		],
		description: 'A look at our CCTV, alarm, and surveillance installations.',
	},
	{
		title: 'Maintenance & Team at Work',
		images: [
			'/assets/team.jpg',
			'/assets/team1.jpg',
			'/assets/team2.jpg',
			'/assets/team3.jpg',
			'/assets/team4.jpg',
			'/assets/team5.jpg',
			'/assets/team6.jpeg',
			'/assets/team8.jpeg',
		],
		description: 'Our expert team in action, providing support and maintenance.',
	},
];

const SLIDE_INTERVAL = 5000; // 5 seconds

const Gallery = () => {
	const [currentSection, setCurrentSection] = useState(0);
	const [currentImage, setCurrentImage] = useState(0);
	const [modalImg, setModalImg] = useState(null);
	const [showGridModal, setShowGridModal] = useState(false);
	const slideTimeout = useRef(null);

	const section = gallerySections[currentSection];
	const images = section.images;

	useEffect(() => {
		slideTimeout.current = setTimeout(() => {
			if (currentImage < images.length - 1) {
				setCurrentImage(currentImage + 1);
			} else {
				// Move to next section or loop
				if (currentSection < gallerySections.length - 1) {
					setCurrentSection(currentSection + 1);
					setCurrentImage(0);
				} else {
					setCurrentSection(0);
					setCurrentImage(0);
				}
			}
		}, SLIDE_INTERVAL);
		return () => clearTimeout(slideTimeout.current);
	}, [currentImage, currentSection, images.length]);

	const handleViewMore = () => {
		setShowGridModal(true);
	};

	const handleCloseGridModal = () => {
		setShowGridModal(false);
		// Optionally scroll to gallery section
		document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section
			id="gallery"
			className="pt-20 pb-10 px-2 sm:px-4 md:px-8 bg-gradient-to-br min-h-screen flex flex-col items-center justify-center w-full"
		>
			<div className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl flex flex-col items-center justify-center mb-10 px-2 sm:px-4">
				<h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif font-bold gradient-text mb-4 text-center break-words">
					Gallery
				</h2>
				<h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-navy-700 mb-2 text-center break-words">
					{section.title}
				</h3>
				<p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 text-center max-w-2xl break-words">
					{section.description}
				</p>
				<div className="relative w-full h-64 xs:h-80 sm:h-[22rem] md:h-[28rem] lg:h-[34rem] flex items-center justify-center rounded-2xl bg-transparent overflow-hidden">
					{images.map((img, idx) => (
						<img
							key={img}
							src={img}
							alt={section.title + ' ' + (idx + 1)}
							className={`absolute top-0 left-0 w-full h-full object-contain transition-transform duration-700 ease-in-out rounded-2xl ${
								idx === currentImage
									? 'translate-x-0 opacity-100 z-10'
									: idx < currentImage
									? '-translate-x-full opacity-0'
									: 'translate-x-full opacity-0'
							}`}
							onClick={() => setModalImg(img)}
							style={{ cursor: 'pointer', maxWidth: '100%', maxHeight: '100%' }}
						/>
					))}
					{/* Prev Button */}
					<button
						disabled={currentSection === 0 && currentImage === 0}
						className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-lg disabled:opacity-50 z-20 text-navy-600 bg-white/80 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
						onClick={() => {
							if (currentImage > 0) setCurrentImage(currentImage - 1);
							else if (currentSection > 0) {
								setCurrentSection(currentSection - 1);
								setCurrentImage(
									gallerySections[currentSection - 1].images.length - 1
								);
							}
						}}
						aria-label="Previous image"
					>
						&#8592;
					</button>
					{/* Next Button */}
					<button
						disabled={
							currentSection === gallerySections.length - 1 &&
							currentImage === images.length - 1
						}
						className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-lg disabled:opacity-50 z-20 text-navy-600 bg-white/80 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
						onClick={() => {
							if (currentImage < images.length - 1) setCurrentImage(currentImage + 1);
							else if (currentSection < gallerySections.length - 1) {
								setCurrentSection(currentSection + 1);
								setCurrentImage(0);
							}
						}}
						aria-label="Next image"
					>
						&#8594;
					</button>
				</div>
				<div className="flex justify-center items-center w-full mt-4">
					<button
						className="px-4 py-2 sm:px-6 sm:py-2 rounded-full text-navy-600 bg-gradient-to-r from-blue-100 via-white to-blue-100 shadow-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
						onClick={handleViewMore}
					>
						<span className="inline-block align-middle mr-2">View More</span>
						<svg className="inline-block align-middle w-5 h-5 text-navy-600 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
					</button>
				</div>
			</div>
			{/* Modal for full image view */}
			{modalImg && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
					onClick={() => setModalImg(null)}
				>
					<div
						className="relative max-w-3xl w-full mx-4"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
							onClick={() => setModalImg(null)}
							aria-label="Close image"
						>
							&times;
						</button>
						<img
							src={modalImg}
							alt="Full view"
							className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
							style={{
								background: 'none',
								padding: 0,
								display: 'block',
								margin: '0 auto',
								border: 'none',
							}}
						/>
					</div>
				</div>
			)}

			{/* Modal for full gallery grid */}
			{showGridModal && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
					onClick={handleCloseGridModal}
				>
					<div
						className="relative max-w-6xl w-full mx-4 rounded-xl p-6 overflow-y-auto max-h-[90vh] backdrop-blur-lg shadow-2xl bg-white/30"
						onClick={e => e.stopPropagation()}
					>
						<button
							className="sticky top-2 right-2 float-right z-10 text-navy-700 bg-white/80 rounded-full p-2 hover:bg-slate-200 transition shadow"
							onClick={handleCloseGridModal}
							aria-label="Close gallery grid"
						>
							&times;
						</button>
						<h2 className="text-3xl sm:text-5xl font-serif font-bold gradient-text mb-8 text-center">
							Gallery
						</h2>
						{gallerySections.map((section, idx) => (
							<div key={idx} className="mb-10 w-full">
								<h3 className="text-2xl sm:text-3xl font-bold text-navy-700 mb-3 text-center">
									{section.title}
								</h3>
								<p className="text-base text-slate-600 mb-4 text-center">
									{section.description}
								</p>
								{/* Masonry grid using CSS columns */}
								<div className="columns-1 xs:columns-2 sm:columns-3 md:columns-4 gap-4 w-full max-w-6xl mx-auto">
									{section.images.map((img, i) => (
										<img
											key={i}
											src={img}
											alt={section.title + ' ' + (i + 1)}
											className="w-full mb-4 rounded-xl shadow-lg bg-white/70 cursor-pointer hover:scale-105 transition-transform duration-300"
											onClick={e => {
									e.stopPropagation();
									setModalImg(img);
								}}
								style={{ display: 'inline-block' }}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Modal for full image view (also works in grid modal) */}
			{modalImg && (
				<div
					className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm"
					onClick={() => setModalImg(null)}
				>
					<div
						className="relative max-w-3xl w-full mx-4"
						onClick={e => e.stopPropagation()}
					>
						<button
							className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
							onClick={() => setModalImg(null)}
							aria-label="Close image"
						>
							&times;
						</button>
						<img
							src={modalImg}
							alt="Full view"
							className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
							style={{
								background: 'none',
								padding: 0,
								display: 'block',
								margin: '0 auto',
								border: 'none',
							}}
						/>
					</div>
				</div>
			)}
		</section>
	);
};

export default Gallery;
