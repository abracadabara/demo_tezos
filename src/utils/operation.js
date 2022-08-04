// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation
import { tezos } from "./tezos";

export const startVotingOperation = async () => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1KXd9697MdB8X73bAu3XsPVC393dHjuVnC"
    );
    const op = await contractInstance.methods.start().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const voteCandidateOperation = async (candidate) => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1KXd9697MdB8X73bAu3XsPVC393dHjuVnC"
    );
    const op = await contractInstance.methods.vote(candidate).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const endVotingOperation = async () => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1KXd9697MdB8X73bAu3XsPVC393dHjuVnC"
    );
    const op = await contractInstance.methods.end().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const resetVotingOperation = async () => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1KXd9697MdB8X73bAu3XsPVC393dHjuVnC"
    );
    const op = await contractInstance.methods.reset().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};
