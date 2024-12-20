function IngredientsComponent() {
  return (
<section className="ingredients-section">

<div className="ingredients-grid">
    <div className="ingredientDescription">
        <h4 className="titleIngredients">INGREDIENTS</h4>
        <h2 className="title">Better Ingredients</h2>
        <p className="subtitle">
            Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
        </p>
    </div>
    <div className="ingredient-card bg1">
        <h3>Vitamin C</h3>
        <p>Vitamin C as ascorbic acid</p>
        <a href="#" className="see-more">SEE MORE</a>
    </div>
    <div className="ingredient-card bg2">
        <h3>Vitamin B3</h3>
        <p>Niacin for healthy gut and skin</p>
        <a href="#" className="see-more">SEE MORE</a>
    </div>
    <div className="ingredient-card bg3">
        <h3>Magnesium</h3>
        <p>Boost energy and support muscle function</p>
        <a href="#" className="see-more">SEE MORE</a>
    </div>
    <div className="ingredient-card bg4">
        <h3>Hyaluronic Acid</h3>
        <p>For smooth,<br/>supple and soft skin!</p>
        <a href="#" className="see-more">SEE MORE</a>
    </div>
    <div className="ingredient-card bg5">
        <h3>Lactobacillus</h3>
        <p>Invigorate your gut <br/>microbiome</p>
        <a href="#" className="see-more">SEE MORE</a>
    </div>
    <div className="decorative-shapes">
        <div className="quarter-circle"></div>
        <div className="circle"></div>
    </div>
</div>
</section>
  )
}

export default IngredientsComponent
