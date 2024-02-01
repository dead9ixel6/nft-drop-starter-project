const { exec } = require("child_process");

// Function to execute the command
function airdropSolana() {
  exec("solana airdrop 2 --url devnet", (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

// Schedule the command to run every 5 seconds (5000 milliseconds)
setInterval(airdropSolana, 5000);
