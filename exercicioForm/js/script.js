const InfoForm = () => {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventForm(event) {
        event.preventDefault()
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');


        // aqui eu poderia usar o .push() para n precisar criar uma nova const
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        pessoas.push(pessoa);

        form.reset();

        exibirResultado();
    }

    function exibirResultado() {
        resultado.innerHTML = '';

        pessoas.forEach((pessoa, index) => {
            const divPessoa = document.createElement('div');
            divPessoa.innerHTML = `Pessoa ${index + 1}: ${pessoa.nome} ${pessoa.sobrenome},
                                    Peso: ${pessoa.peso}, Altura: ${pessoa.altura}`;
            resultado.appendChild(divPessoa);
        });
    }

    form.addEventListener('submit', recebeEventForm);
}

InfoForm();