try {
  const data = 123;

  throw new Error("Error on data");

  function dataPrint() {
    return data;
  }

  dataPrint();
} catch (err) {
  console.log(err);

  console.log(err.message);
} finally {
  console.log("Work done");
}
