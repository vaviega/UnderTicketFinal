import { Component } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { doc, collection, setDoc, Firestore, collectionData, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  eventos:any=[]
  eventosName:any=[]
  eventosValor:any=[]
  ngOnInit() {
    // listAll(ref(this.af, 'promo')).then(imgs => {
    //   imgs.items.forEach((im) => {
    //     getDownloadURL(im).then((res) => {
    //       this.promos.push(res)
    //     })
    //   })
    // })
    this.listar()
  }
  async listar(){
  const querySnapshot = await getDocs(collection(this.firestore, "eventos"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()['eventos']}`);
      this.eventos=[...this.eventos,{img:doc.data()['img'], nome:doc.data()['nome'],data:doc.data()['data'], valor:doc.data()['valor']}]
    });
  }
  constructor(private af:Storage, private firestore: Firestore) {}

}
