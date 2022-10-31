"use strict";

import UI from "./modules/ui";
import POST from "./modules/postMethod";
import GET from "./modules/getMethod";
import PATCH from "./modules/patchMethod";
import DELETE from "./modules/deleteMethod";
import COMPLETE from "./modules/complete";
import FILTER from "./modules/filter";
import SELECT from "./modules/select";


async function engine () {
	const url = "http://localhost:8888/todo";
	const url1 = "http://localhost:8888/history";

	UI.start();

	const { form, screenInput } = UI;

	await POST(form, screenInput, url);
	await GET(UI, url, url1);
	await SELECT(PATCH, DELETE, COMPLETE, url, url1);
	await FILTER(
		document.querySelectorAll("[data-filter]"),
		document.querySelectorAll("[data-alldeleted]"),
		url1,
		url,
		UI,
		PATCH, 
		DELETE, 
		COMPLETE
	);
}

engine();