import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { r as getSql } from "./db-DN6EcFuE.mjs";
import { t as authMiddleware } from "./middleware-D5SjlkBJ.mjs";
import { n as getSubject } from "./catalog-CNe7wnVA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attempts-_5xV4Hpy.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var listAttempts_createServerFn_handler = createServerRpc({
	id: "08896298e167f0c648a6001a50094076b8de3acef8463654b19fe7bf21d3dff5",
	name: "listAttempts",
	filename: "src/lib/quiz/attempts.ts"
}, (opts) => listAttempts.__executeServer(opts));
var listAttempts = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listAttempts_createServerFn_handler, async ({ context }) => {
	return (await getSql())`
      select id, subject, score, total, created_at::text as created_at
      from attempts
      where user_id = ${context.userId}
      order by created_at desc
      limit 30
    `;
});
var saveAttempt_createServerFn_handler = createServerRpc({
	id: "b51d649ad82f1ee88478598f6ac973e554e00fb9a4c5b9c8615f29d761caa012",
	name: "saveAttempt",
	filename: "src/lib/quiz/attempts.ts"
}, (opts) => saveAttempt.__executeServer(opts));
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
}).handler(saveAttempt_createServerFn_handler, async ({ context, data }) => {
	return { id: (await (await getSql())`
      insert into attempts (user_id, subject, score, total)
      values (${context.userId}, ${data.subject}, ${data.score}, ${data.total})
      returning id
    `)[0]?.id ?? 0 };
});
//#endregion
export { listAttempts_createServerFn_handler, saveAttempt_createServerFn_handler };
