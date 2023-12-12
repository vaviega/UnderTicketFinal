import { Component, OnInit } from '@angular/core';
import { doc, collection, setDoc, Firestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  cadastrarEvento(nome: any, data:any, valor: any, descricao: any, qtd: any, flyer: any) {
    const eventos = {
      descricao: descricao,
      img: flyer,
      nome: nome,
      qtd: qtd,
      valor: valor,
      data: data
    }
    const document = doc(collection(this.firestore, 'eventos'));
    return setDoc(document, eventos);
}

constructor(private firestore: Firestore) { }

ngOnInit() {
}

}
