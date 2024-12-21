import { BlogComponent, CoverComponent, FooterComponent, IngredientsComponent } from "./home/components";


// Functional Components for better Code Structuring and have used best practices and static components for Better SSR and Lazy Loading

export default function Home()
{
return <>
<CoverComponent/>
<IngredientsComponent/>
<BlogComponent/>
<FooterComponent/>
</>
}