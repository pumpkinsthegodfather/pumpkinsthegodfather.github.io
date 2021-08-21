import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import "./NonnativePDF.css";

const NonnativePDF = props => {
	const [numPages, setNumPages] = useState(null);

	function scalePdfToScreen() {
		let zoomFactor = Math.min(
			(window.visualViewport.width - 17) / 612,
			1.37
		);
		document.getElementById("primary").style.zoom = zoomFactor;
	}

	function resize() {
		scalePdfToScreen();
		window.visualViewport.removeEventListener("resize", resize);
	}

	useEffect(() => {
		window.visualViewport.addEventListener("resize", resize);
		scalePdfToScreen();
		return () => {
			window.visualViewport.removeEventListener("resize", resize);
		}
	}, []);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	function removeTextLayerOffset() {
		const textLayers = document.querySelectorAll(
			".react-pdf__Page__textContent"
		);
		textLayers.forEach(layer => {
			const { style } = layer;
			style.display = "none";
		});
	}

	return (
		<div id="primary">
			<div id="toolbar">
				<a href={props.src} download>
					<div id="downloadPDF"></div>
				</a>
			</div>
			<Document
				file={props.src}
				onLoadSuccess={onDocumentLoadSuccess}
				renderMode="svg">
				{Array.from(new Array(numPages), (el, index) => (
					<Page
						key={`page_${index + 1}`}
						pageNumber={index + 1}
						onPageSuccess={removeTextLayerOffset}
					/>
				))}
			</Document>
		</div>
	);
};

export default NonnativePDF;
