module.exports=(Sequelize, Datatype)=>{
    const Produtos=Sequelize.define('Produtos',{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:Datatype.INTEGER,
        },
        produto:{
            allowNull:false,
            type:Datatype.STRING,
        },
        marca:{
            allowNull:false,
            type:Datatype.INTEGER,
        },
        preco:{
            allowNull:false,
            type:Datatype.FLOAT,
        },
    },{});

    Produtos.associate=(models)=>{
        Produtos.belongsTo(models.Marcas,{
            foreignKey:'marca',
            targetKey:'id',
            as:'m'
        })
    }

    return Produtos;
}