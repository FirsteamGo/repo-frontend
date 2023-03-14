import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";

//yelupages
import ActView from "@/views/YeluPages/Act/ActView.vue";
import CampView from "@/views/YeluPages/Camp/CampView.vue";
import MemberView from "@/views/YeluPages/Member/MemberView.vue";
import SelfView from "@/views/YeluPages/Self/SelfView.vue";
import SetView from "@/views/YeluPages/Set/SetView.vue";
import ShopView from "@/views/YeluPages/Shop/ShopView.vue";
//測試用頁面
import test from "@/views/YeluPages/Self/test.vue";
import test2 from "@/views/YeluPages/Self/test2.vue";
import shoppingcart from "@/views/YeluPages/shoppingcart.vue";

import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import AuthorView from "../views/LandingPages/Author/AuthorView.vue";
import SignInBasicView from "../views/LandingPages/SignIn/BasicView.vue";
import PageHeaders from "../layouts/sections/page-sections/page-headers/HeadersView.vue";
import PageFeatures from "../layouts/sections/page-sections/features/FeaturesView.vue";
import NavigationNavbars from "../layouts/sections/navigation/navbars/NavbarsView.vue";
import NavigationNavTabs from "../layouts/sections/navigation/nav-tabs/NavTabsView.vue";
import NavigationPagination from "../layouts/sections/navigation/pagination/PaginationView.vue";
import InputAreasInputs from "../layouts/sections/input-areas/inputs/InputsView.vue";
import InputAreasForms from "../layouts/sections/input-areas/forms/FormsView.vue";
import ACAlerts from "../layouts/sections/attention-catchers/alerts/AlertsView.vue";
import ACModals from "../layouts/sections/attention-catchers/modals/ModalsView.vue";
import ACTooltipsPopovers from "../layouts/sections/attention-catchers/tooltips-popovers/TooltipsPopoversView.vue";
import ElAvatars from "../layouts/sections/elements/avatars/AvatarsView.vue";
import ElBadges from "../layouts/sections/elements/badges/BadgesView.vue";
import ElBreadcrumbs from "../layouts/sections/elements/breadcrumbs/BreadcrumbsView.vue";
import ElButtons from "../layouts/sections/elements/buttons/ButtonsView.vue";
import ElButtonGroups from "../layouts/sections/elements/button-groups/ButtonGroupsView.vue";
import ElDropdowns from "../layouts/sections/elements/dropdowns/DropdownsView.vue";
import ElProgressBars from "../layouts/sections/elements/progress-bars/ProgressBarsView.vue";
import ElToggles from "../layouts/sections/elements/toggles/TogglesView.vue";
import ElTypography from "../layouts/sections/elements/typography/TypographyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      //test
      path: "/pages/landing-pages/test",
      name: "test",
      component: test,
    },
    {
      //test完刪除
      path: "/pages/landing-pages/test2",
      name: "test2",
      component: test2,
    },
    {

      path: "/pages/Yelu-pages/shoppingcart",
      name: "shoppingcart",
      component: shoppingcart,
    },
    {
      path: "/pages/Yelu-pages/act",
      name: "act",
      component: ActView,
      children: [
        {
          path: "Sections/ActHot",
          name: "ActHot",
          component: () => import("../views/YeluPages/Act/Sections/ActHot.vue"),
          children: [
            {
              path: "ActBlogCards/ActBlogCardValue",
              name: "ActBlogCardValue",
              component: () => import("../views/YeluPages/Act/Sections/ActBlogCards/ActBlogCardValue.vue")
            },
          ]
        },
        {
          path: "Sections/ActNorth",
          name: "ActNorth",
          component: () => import("../views/YeluPages/Act/Sections/ActNorth.vue"),

        },
        {
          path: "Sections/ActWest",
          name: "ActWest",
          component: () => import("../views/YeluPages/Act/Sections/ActWest.vue"),
          children: [
            {
              path: "ActBlogCards/ActBlogCardValue",
              name: "ActBlogCardValue",
              component: () => import("../views/YeluPages/Act/Sections/ActBlogCards/ActBlogCardValue.vue")
            },
          ]
        },
        {
          path: "Sections/ActSouth",
          name: "ActSouth",
          component: () => import("../views/YeluPages/Act/Sections/ActSouth.vue"),
        },
        {
          path: "Sections/ActEast",
          name: "ActEast",
          component: () => import("../views/YeluPages/Act/Sections/ActEast.vue"),
        },
      ]
    },
    {
      path: "/pages/Yelu-pages/camp",
      name: "camp",
      component: CampView,
      children: [
        {
          path: "Sections/CampHot",
          name: "CampHot",
          component: () => import("../views/YeluPages/Camp/Sections/CampHot.vue"),
        },
        {
          path: "Sections/CampNorth",
          name: "CampNorth",
          component: () => import("../views/YeluPages/Camp/Sections/CampNorth.vue"),
        },
        {
          path: "Sections/CampWest",
          name: "CampWest",
          component: () => import("../views/YeluPages/Camp/Sections/CampWest.vue"),
        },
        {
          path: "Sections/CampSouth",
          name: "CampSouth",
          component: () => import("../views/YeluPages/Camp/Sections/CampSouth.vue"),
        },
        {
          path: "Sections/CampEast",
          name: "CampEast",
          component: () => import("../views/YeluPages/Camp/Sections/CampEast.vue"),
        },
      ]
    },
    {
      path: "/pages/Yelu-pages/member",
      name: "member",
      component: MemberView,
    },
    {
      path: "/pages/Yelu-pages/self",
      name: "self",
      component: SelfView,
    },
    {
      path: "/pages/Yelu-pages/set",
      name: "set",
      component: SetView,
    },
    {
      path: "/pages/Yelu-pages/shop",
      name: "shop",
      component: ShopView,
    },
    {
      //landing-pages
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/pages/landing-pages/contact-us",
      name: "contactus",
      component: ContactView,
    },
    {
      path: "/pages/landing-pages/author",
      name: "author",
      component: AuthorView,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "signin-basic",
      component: SignInBasicView,
    },
    {
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PageHeaders,
    },
    {
      path: "/sections/page-sections/features",
      name: "page-features",
      component: PageFeatures,
    },
    {
      path: "/sections/navigation/navbars",
      name: "navigation-navbars",
      component: NavigationNavbars,
    },
    {
      path: "/sections/navigation/nav-tabs",
      name: "navigation-navtabs",
      component: NavigationNavTabs,
    },
    {
      path: "/sections/navigation/pagination",
      name: "navigation-pagination",
      component: NavigationPagination,
    },
    {
      path: "/sections/input-areas/inputs",
      name: "inputareas-inputs",
      component: InputAreasInputs,
    },
    {
      path: "/sections/input-areas/forms",
      name: "inputareas-forms",
      component: InputAreasForms,
    },
    {
      path: "/sections/attention-catchers/alerts",
      name: "ac-alerts",
      component: ACAlerts,
    },
    {
      path: "/sections/attention-catchers/modals",
      name: "ac-modals",
      component: ACModals,
    },
    {
      path: "/sections/attention-catchers/tooltips-popovers",
      name: "ac-tooltips-popovers",
      component: ACTooltipsPopovers,
    },
    {
      path: "/sections/elements/avatars",
      name: "el-avatars",
      component: ElAvatars,
    },
    {
      path: "/sections/elements/badges",
      name: "el-badges",
      component: ElBadges,
    },
    {
      path: "/sections/elements/breadcrumbs",
      name: "el-breadcrumbs",
      component: ElBreadcrumbs,
    },
    {
      path: "/sections/elements/buttons",
      name: "el-buttons",
      component: ElButtons,
    },
    {
      path: "/sections/elements/button-groups",
      name: "el-button-groups",
      component: ElButtonGroups,
    },
    {
      path: "/sections/elements/dropdowns",
      name: "el-dropdowns",
      component: ElDropdowns,
    },
    {
      path: "/sections/elements/progress-bars",
      name: "el-progress-bars",
      component: ElProgressBars,
    },
    {
      path: "/sections/elements/toggles",
      name: "el-toggles",
      component: ElToggles,
    },
    {
      path: "/sections/elements/typography",
      name: "el-typography",
      component: ElTypography,
    },
  ],
});

export default router;
