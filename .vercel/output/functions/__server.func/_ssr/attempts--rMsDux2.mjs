import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-D5SjlkBJ.mjs";
import { n as getSubject } from "./catalog-CNe7wnVA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attempts--rMsDux2.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SUBJECT_IDS = /* @__PURE__ */ new Set([
	"math",
	"informatics",
	"history",
	"english"
]);
var listAttempts = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("08896298e167f0c648a6001a50094076b8de3acef8463654b19fe7bf21d3dff5"));
var saveAttempt = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => {
	const subject = getSubject(data.subject);
	if (!subject || !SUBJECT_IDS.has(subject.id)) throw new Error("Белгісіз пән");
	if (!Number.isInteger(data.score) || !Number.isInteger(data.total)) throw new Error("Нәтиже бүтін сан болуы керек");
	if (data.total !== subject.questions.length || data.score < 0 || data.score > data.total) throw new Error("Нәтиже жарамсыз");
	return {
		subject: subject.id,
		score: data.score,
		total: data.total
	};
}).handler(createSsrRpc("b51d649ad82f1ee88478598f6ac973e554e00fb9a4c5b9c8615f29d761caa012"));
//#endregion
export { saveAttempt as n, listAttempts as t };
