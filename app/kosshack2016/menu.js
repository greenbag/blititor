var fs = require('fs');
var winston = require('winston');

var misc = require('../../core/lib/misc');

var routeTable = misc.getRouteTable();
// var routeTable = require('../../core/config/route_default');
// or sometime need to make your own routeTable
// and update own route table

var Menu = [
    {
        id: 'index',
        name: 'KossLab Hackathon 2016',
        url: routeTable.root
    },
    {
        id: 'volunteer_list',
        name: 'Volunteer List',
        url: '/volunteer'
    },
    {
        id: 'project_list',
        name: 'Project List',
        url: '/project'
    }
];

var AdminMenu = [
    {
        id: 'index',
        name: '관리자 홈',
        url: routeTable.admin_root
    },
    {
        id: 'new',
        name: '신규 계정 생성',
        url: routeTable.admin_root + routeTable.admin.accountNew
    },
    {
        id: 'manage',
        name: '운영',
        url: routeTable.manage_root
    }
];

var ManagerMenu = [
    {
        id: 'index',
        name: '운영자 홈',
        url: routeTable.manage_root
    },
    {
        id: 'account',
        name: '계정',
        url: routeTable.manage_root + routeTable.manage.account
    },
    {
        id: 'guestbook',
        name: '방명록 관리',
        url: routeTable.manage_root + routeTable.guestbook_root
    }
];

function menuExpose(req, res, next) {

    // var pages = BLITITOR.route.pages;
    // console.log('pages:', pages);

    //todo: retrieve from database site menu record which should match with `pages` items
    // read from database
    res.locals.menu = Menu;
    res.locals.adminMenu = AdminMenu;
    res.locals.managerMenu = ManagerMenu;

    next();
}

module.exports = Menu;
module.exports.expose = menuExpose;