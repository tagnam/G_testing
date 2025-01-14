import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { testing_toolComponent } from './testing_tool/testing_tool.component';

export const routes: Routes = [
{ 
    path:'', 
    component:HomeComponent
},

{
    path:'about',
     component:AboutComponent
    },

{
    path:'blog'  ,
    component:BlogComponent
},

{ 
    path:'contact',
    component:ContactComponent
},

{ 
    path:'product', 
    component:ProductComponent
},

{
    path:'tool',
    component:testing_toolComponent
}

];
