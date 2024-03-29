async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/KrypteX358/Medical_Topic_Modelling",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."}).then((response) => {
	console.log(JSON.stringify(response));
});
// Ultrasound technology allows doctors to “see” inside a paƟent without resorƟng to surgery. AtransmiƩer sends high frequency sound waves into the body, where they bounce off the different Ɵssues and organs to produce a disƟncƟve paƩern of echoes. A receiver “hears” the returning echopaƩern and forwards it to a computer, which translates the data into an image on a television screen. Because ultrasound can disƟnguish subtle variaƟons between soŌ, fluid-filled Ɵssues, it is parƟcularly useful in providing diagnosƟc images of the abdomen. Ultrasound can also be used in treatment.