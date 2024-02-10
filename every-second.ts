// Assuming Deno.openKv() and the KV namespace provide the necessary functionality as per your setup.
const kv = await Deno.openKv();

async function incrementCounterEverySecond() {
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    await kv.atomic().sum(["task_runs"], 1n).commit(); // Increment the counter
    console.log("Counter incremented.");
  }
}

incrementCounterEverySecond();

Deno.serve(async () => {
  // Get the latest count
  const count = await kv.get(["task_runs"]);
  return new Response(`The job has been run ${count.value || 0} times.`);
});
