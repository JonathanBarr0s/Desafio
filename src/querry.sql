create table 
    produtos (
    id serial primary key,
    descricao text,
    quantidade_estoque int,
    valor int,
    categoria_id int references categorias(id)
);

create table 
    clientes (
    id serial primary key,
    nome text not null,
    email text unique not null,
    cpf int unique not null,
    cep int,
    rua text,
    numero int,
    bairro text,
    cidade text,
    estado text,
);