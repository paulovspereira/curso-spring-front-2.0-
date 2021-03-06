import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from '../../services/domain/produto.service';
import { API_CONFIG } from '../../config/api.config';
import { CartService } from '../../services/domain/cart.service';
import { ProdutoDTO } from '../../models/produto.dto';
import { CartItem } from '../../models/cart.item';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  items: CartItem[]= [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartService: CartService,
    public produtoService: ProdutoService) {
  }

  ionViewDidLoad() {
    let cart = this.cartService.getCart();
    this.items = cart.items;
    this.loadImageUrls();
  }

  loadImageUrls() {
    for (var i=0; i<=this.items.length; i++) {
      if(this.items[i] !== undefined) {
        this.items[i].produto.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${this.items[i].produto.id}-small.jpg`;    
      }
    }
  }
  
  removeItem(produto: ProdutoDTO) {
    this.items = this.cartService.removeProduto(produto).items;
  }

  increaseQuantity(produto: ProdutoDTO) {
    this.items = this.cartService.increaseQuantity(produto).items;
  }

  decreaseQuantity(produto: ProdutoDTO) {
    this.items = this.cartService.decreaseQuantity(produto).items;
  }

  total() : number {
    return this.cartService.total();
  }  

  goOn(){
    this.navCtrl.setRoot('CategoriasPage');
  }

  checkout(){
    this.navCtrl.push('PickAddressPage');
  }
}
