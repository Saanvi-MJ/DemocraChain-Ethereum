# DemocraChain

## Run Project Locally

To run the Project locally:

1. Create a _.env_ File by running the Command:

   ```sh
   cp .env.example .env
   ```

2. Enter the Pinata API Key and Secret

3. Open a Terminal and run

   ```sh
   npx hardhat node
   ```

4. Copy the Account ID of the Any Account as the `OWNER_ADDRESS` in *.env\_ File

5. Create Another Terminal and run

   ```sh
   npx hardhat run scripts/deploy.js --network localhost
   ```

6. Copy the Contract Address to the _.env_ File

7. Run the Command to start the Frontend

   ```sh
   npm run dev
   ```
