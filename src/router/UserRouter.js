export default {
  path: "/user",
  component: () => import('../views/User'),
  children: [
    {
      path: '',
      component: () => import('../views/User/User')
    },
    {
      path: "setting",
      component: () => import('../views/User/Setting')
    },
    {
      path: "setter",
      component: () => import('../components/User/Set/SetList/setter'),
      children: [
        {
          path: "changepassword",
          component: () => import('../components/User/Set/SetList/SetItem/changepassword')
        },
        {
          path: "opinion",
          component: () => import('../components/User/Set/SetList/SetItem/opinion')
        },
        {
          path: "ContactUS",
          component: () => import('../components/User/Set/SetList/SetItem/ContactUS')
        },
        {
          path: "agreement",
          component: () => import('../components/User/Set/SetList/SetItem/agreement')
        },
        {
          path: "privacy",
          component: () => import('../components/User/Set/SetList/SetItem/privacy')
        }
      ]
    },
    {
      path: "fans",
      component: () => import('../views/User/Fans')
    },
    {
      path: "message",
      component: () => import('../views/User/Message')
    },
    {
      path: "data",
      component: () => import('../views/User/Data'),
      children: [
        {
          path: "",
          component: () => import('../components/User/data/DataPage')
        },
        {
          path: "name",
          name: "name",
          component: () => import('../components/User/data/NamePage')
        },
        {
          path: "autograph",
          name: "autograph",
          component: () => import('../components/User/data/AutographPage')
        }
      ]
    },
    {
      path: "nobility",
      component: () => import('../views/User/Nobility')
    },
    {
      path: "task",
      component: () => import('../views/User/Task')
    },
    {
      path: "award",
      component: () => import('../views/User/Award')
    },
    {
      path: "earnings",
      component: () => import('../views/User/Earnings'),
      children: [
        {
          path: "",
          component: () => import('../components/User/Earnings/EarningsHeader.vue')
        }
      ]
    },
    {
      path: "phone",
      component: () => import('../views/User/Phone')
    },
    {
      path: "level",
      component: () => import('../views/User/Level'),
      children: [
        {
          path: "",
          component: () => import('../components/User/Level/Level.vue'),

        }
      ]
    },
    {
      path: "real",
      component: () => import('../views/User/Real'),
      children: [
        {
          path: "",
          component: () => import('../components/User/Real/Real.vue'),

        }
      ]
    },
    {
      path: "manager",
      component: () => import('../views/User/Manager'),
      children: [
        {
          path: "",
          component: () => import('../components/User/Manager/ManagerPage')
        },
        {
          path: "admin",
          component: () => import('../components/User/Manager/Setadmin')
        },
        {
          path: "nosay",
          component: () => import('../components/User/Manager/Nosay')
        },
        {
          path: "black",
          component: () => import('../components/User/Manager/Blacklist')
        }
      ]
    },
    {
      path: "service",
      component: () => import('../views/User/Service')
    }
  ]
}