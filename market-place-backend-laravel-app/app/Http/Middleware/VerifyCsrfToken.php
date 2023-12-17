<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        '/studentclubs',
        '/studentcreatedclubs',
        '/studentjoinclub',
        '/studentleaveclub',
        '/studentcart',
        '/studentcreateclub',
        '/studentdeleteclub',
        '/studentcartupdate',
        '/studentactiveorders',
        '/studentinactiveorders',
        '/studentaddtocart',
        '/products',
        '/posts',
        '/getSingleProdBusiness',
        '/deleteProdBusiness',
        '/updateProdDetBusiness',
        '/addNewProductBusiness',
        '/updateBusinessOwnerDet',
        '/getAllclubs',
        '/getAllbusinessOwner',
        '/getAllstudents',
        '/schAdminupdateBusinessOwnerDet',
        '/schAdminupdateStudentDet',
        '/getAllschAdmin',
        '/superAdminUpdateschaDetails',
        '/homeProd',
        '/productsBO',
        '/studentdeletefromcart'
    ];
}
