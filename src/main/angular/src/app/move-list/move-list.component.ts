import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent implements OnInit {

  constructor(private promotionService: PromotionService) { }

  listOfMoves;
  listOfURLs: Array<{ name: String, url: String}> = [
    {name: 'wP', url: '/PromotionChess/img/chesspieces/wikipedia/wP.png'},
    {name: 'bP', url: '/PromotionChess/img/chesspieces/wikipedia/bP.png'},
    {name: 'wR', url: '/PromotionChess/img/chesspieces/wikipedia/wR.png'},
    {name: 'bR', url: '/PromotionChess/img/chesspieces/wikipedia/bR.png'},
    {name: 'wB', url: '/PromotionChess/img/chesspieces/wikipedia/wB.png'},
    {name: 'bB', url: '/PromotionChess/img/chesspieces/wikipedia/bB.png'},
    {name: 'wN', url: '/PromotionChess/img/chesspieces/wikipedia/wN.png'},
    {name: 'bN', url: '/PromotionChess/img/chesspieces/wikipedia/bN.png'},
    {name: 'wQ', url: '/PromotionChess/img/chesspieces/wikipedia/wQ.png'},
    {name: 'bQ', url: '/PromotionChess/img/chesspieces/wikipedia/bQ.png'},
    {name: 'wK', url: '/PromotionChess/img/chesspieces/wikipedia/wK.png'},
    {name: 'bK', url: '/PromotionChess/img/chesspieces/wikipedia/bK.png'}
  ];
  ngOnInit() {

    this.listOfMoves = this.promotionService.getMoveList();
  }

  findImage(piece: String){
    for(let pic of this.listOfURLs){
      if(piece == pic.name){
        return pic.url;
      }
    }
  }


}
