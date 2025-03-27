export default defineDesktopApp({
    id: "org.owdproject.about",
    name: "About",
    singleton: true,
    icon: "mdi:hexagon-multiple-outline",
    windows: {
        main: {
            component: () => import('./app/components/Window/WindowAbout.vue'),
            name: "WindowAbout",
            category: "system-tools",
            title: "About",
            icon: "mdi:hexagon-multiple-outline",
            pinned: true,
            resizable: false,
            size: {
                width: 448,
                height: 240
            },
            position: {
                x: 400,
                y: 240,
                z: 0
            },
        }
    },
    commands: {
        about: (app: IApplicationController) => {
            app.openWindow("main")
        }
    },
    onLaunch: (app: IApplicationController) => {
        app.openWindow('main')
    }
})