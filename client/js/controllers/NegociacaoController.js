class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQunatidade = $('#quantidade');
    this._inputValor = $('#valor');
  }


  adiciona(event){
    event.preventDefault();


    let negociacao = new Negociacao(
      let data = new Date(this._inputData.value.replace(/-/g, ','));
      this._inputQunatidade.value,
      this._inputValor.value
    );




  }
}
