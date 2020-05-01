# PromotionChess
This is our combined Angular 8 Frontend and JavaEE Backend for our Senior Project @ Kennesaw State University of Spring 2020

## Project Details
The objective of this project was to develop a variant of chess, called Promotion Chess, that starts with 15 Pawns and 1 King on each side, where Pieces can promote into higher ranking pieces.
The other objective was to include an AI, based on Minimax algorithm, with Alpha-Beta Pruning, that can play Promotion Chess.

## Repository Links
[PromotionChess-Frontend](https://github.com/AdamD1001/PromotionChess-Frontend)

[PromotionChess-Backend](https://github.com/Fulgar/PromotionChess-Backend)

[PromotionChess](https://github.com/Fulgar/PromotionChess)

## Group Members
Amed Tentori

Adam Dillard

Charles Nixon

Cody Ziegler

Jason James

## Dependencies
[chessboard.js](http://chessboardjs.com/)


## *IMPORTANT SETUP INSTRUCTIONS*

1. Configure gradle.properties to correct JAVA_HOME location
2. Ensure gradle build script runs by running "gradle build" in root project directory
3. (For IntelliJ) Add Run Configuration for JBoss Local Server
    
    a.) Select Wildfly server location under "Application Server"
    
    b.) Under "Deployment" tab (at top), Select Add -> Artifact -> WAR file (NOT the exploded version)
