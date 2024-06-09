import { Routes } from "@angular/router";
import { LandingPageComponent } from "./LandingPage/landing-page/landing-page.component";
import { LoginComponent } from "./With-Out-Registration/login-register/login/login.component";
import { RegisterComponent } from "./With-Out-Registration/login-register/register/register.component";
import { SelectFrenchiseComponent } from "./With-Out-Registration/VerificationForm/select-frenchise/select-frenchise.component";

import { ContactComponent } from "./With-Out-Registration/VerificationForm/contact/contact.component";
import { VerificationComponent } from "./With-Out-Registration/VerificationForm/verification/verification.component";
import { VerifyComponent } from "./With-Out-Registration/VerificationForm/verify/verify.component";
import { AddressComponent } from "./With-Out-Registration/VerificationForm/address/address.component";
import { RegisterFrenchiseComponent } from "./With-Out-Registration/VerificationForm/register-frenchise/register-frenchise.component";
import { LayoutComponent } from "./With-Out-Registration/Dashboard/layout/layout.component";

import { HomeNavComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/home-nav/home-nav.component";
import { RestautantNavComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/restautant-nav/restautant-nav.component";
import { RDetailsPageComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/r-details-page/r-details-page.component";
import { MenuComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/menu/menu.component";

import { RankingComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/ranking/ranking.component";
import { ProfileNavComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/profile-nav/profile-nav.component";
import { PromotionNavComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/promotion-nav/promotion-nav.component";
import { AnalyticNavComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/analytic-nav/analytic-nav.component";
import { AccountNavComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/account-nav/account-nav.component";
import { ValidationNavComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/validation-nav/validation-nav.component";
import { ModificationNavComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/modification-nav/modification-nav.component";
import { CustomServiceNavComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/custom-service-nav/custom-service-nav.component";
import { TraceUserNavComponent } from "./With-Out-Registration/Dashboard/ComponentsFolder/trace-user-nav/trace-user-nav.component";



export const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "gotoRegister", component: RegisterComponent },
  { path: "gotoLogin", component: LoginComponent },
  { path: "goToFrenchise", component: SelectFrenchiseComponent },
  { path: "goToRegFrenchise", component: RegisterFrenchiseComponent },
  { path: "goToAddress", component: AddressComponent },
  { path: "goToContact", component: ContactComponent },
  { path: "goToVerification", component: VerificationComponent },
  { path: "goToVerify", component: VerifyComponent },

  {
    path: "goToLayout",
    component: LayoutComponent,
    children: [
      { path: "", component: HomeNavComponent },
      { path: "homeNav", component: HomeNavComponent },
      { path: "restaurantNav", component: RestautantNavComponent },
      { path: "goToDetail", component: RDetailsPageComponent },
      { path: "goToMenu", component: MenuComponent },
      { path: "rankingNav", component: RankingComponent },
      {path:'profileNav', component: ProfileNavComponent},
      {path:'PromotionNav', component: PromotionNavComponent},
      {path:'AnalyticNav', component: AnalyticNavComponent },
      {path:'AccountNav', component: AccountNavComponent},
      {path:'ValidationtNav', component: ValidationNavComponent},
      {path:'ModificationNav', component: ModificationNavComponent},
      {path:'CustomServiceNav', component: CustomServiceNavComponent},
      {path:'TraceUserNav', component: TraceUserNavComponent},
     
      
    ],
  },

  {path:'goToMenu', component:MenuComponent},



  



];
