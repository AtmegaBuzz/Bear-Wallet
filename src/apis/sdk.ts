import axios from "axios";

export async function storeData({
  sessionId,
  data,
  type,
}: {
  sessionId: string;
  data: string;
  type: string;
}) {
  const res = await axios.post("http://localhost:3000/sdk/store-data", {
    sessionId,
    data,
    type,
  });

  return res.data;
}

export async function sendTransaction({ signedTxn }: { signedTxn: string }) {
  const res = await axios.post("http://localhost:3000/send-transaction", {
    signedTxn,
  });

  return res.data;
}
