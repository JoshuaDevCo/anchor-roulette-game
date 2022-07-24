import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { RouletteGame } from "../target/types/roulette_game";

describe("roulette-game", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.RouletteGame as Program<RouletteGame>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
