import { MockERC20__factory } from "@council/typechain";
import { Wallet } from "ethers";
import {
  ContractWithDeploymentArgs,
  DeployArguments,
} from "src/base/contractFactory";

interface DeployVotingTokenOptions {
  tokenName: string;
  tokenSymbol: string;
  signer: Wallet;
}

export async function deployVotingToken({
  tokenName,
  tokenSymbol,
  signer,
}: DeployVotingTokenOptions): Promise<
  ContractWithDeploymentArgs<MockERC20__factory>
> {
  const votingTokenFactory = new MockERC20__factory(signer);
  const deploymentArgs: DeployArguments<MockERC20__factory> = [
    tokenName,
    tokenSymbol,
    // setting the owner to the Signer so that it's possible to mint tokens at
    // any time using whatever wallet deployed the token.
    signer.address,
  ];

  const votingToken = await votingTokenFactory.deploy(...deploymentArgs);
  await votingToken.deployTransaction.wait(1);
  console.log("Deployed VotingToken");

  return {
    address: votingToken.address,
    name: "VotingToken",
    type: "ERC20",
    contract: votingToken,
    deploymentArgs,
  };
}
