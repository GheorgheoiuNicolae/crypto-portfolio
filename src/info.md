I. Core

    1. Portfolios
        - Automatically create one portfolio

    2. Transactions
        - Actions
        1. Add transaction
        2. Edit transaction
        3. Delete transactions - what happens with the funds ?

        - Register buy/sell coin
        - Register transfer
        - Add existing funds - optional price of purchase
        - Transactions are assigned to a single portfolio

    3. Balances
        - Preselect default portfolio + option to select all portfolios
        - List of owned coins
        - Single coin details
            - list all transactions on the coin
            - chart of the coin with markers for buy/sell
            - balance by exchange


II. Route structure

    // Main navigation
    1. Dashboard - (optional for v1)
        - Your holdings - pie chart with all coins
        - Biggest gainers/losers of the day
        - News widget
        - Other widgets

    2. Transactions
        2.1 Overview
        - List of all transactions with filters
        - Transaction types: buy, sell, transfer, ICO investment
        - Filters:
            - Date - default
            - Type
            - Currency
            - Currency pair
            - Exchange

        2.2 Add transaction modal
        - Choose transaction type
        - Depending on the transaction type, the form will be different

    3. Balances
        3.1 Overview
        - Preselected default portfolio
        - List of all owned coins + ICOs
        - Simple stats like altpoket
        - Add all of the values from transactions in order to calculate total

        3.2 Single balance
        - Chart of the coin with markers for transactions
        - List of transactions below

    4. Exchanges
        - List of exchanges and user's balance in each of them

    5. Watchlist
        - Page similar with Balances
        - Allow the user to choose coins to watch, without having any funds

    // Secondary routes
    6. Support
        - Form to send support ticket
        - Probably we need to integrate some help desk tool
    7. Support Us
        - Short description
        - Team
        - Wallets for donations
        - Somehow track donations, in order to make connection to the user object
    8. User Profile & settings
        - Very similar to dashlog


III. Tech Stack
    // Web
    1. Firebase - firestone db
    2. Firebase - cloud functions(to get and save coins data from apis)
    3. React/redux
    4. APIs - coinmarketcap or other data provider

    // Mobile
    1. Provide mobile also
    2. Start with iOS
    3. Mobile app should mimic the web app
    4. Talk with Mihai about iOS app ?


IV. Database structure
    1. Portfolios {
        uid: {
            portfolioId: {
                name: string
            }
        }
    }

V. Steps of development
    1. Static react with mockup data
    2. Fully responsive UI
    3. Functional react app
        - integration of apis
        - add the necessary functionality to the app
    4. Landing page
    5. Release
    6. Marketing
    7. Start developing mobile

VI. Resources
    1. Fintab app
    2. https://dribbble.com/shots/2947971-Conference-Calling-Manage-a-Call/attachments/612562
    3. https://dribbble.com/shots/4036952-Loan-Book/attachments/925087