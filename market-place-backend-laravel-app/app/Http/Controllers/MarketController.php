<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;

class MarketController extends Controller
{
    function registerUser(Request $req)
    {
        $validateData = $req->validate([
            'name' => 'required|regex:/^[a-z A-Z]+$/u',
            'email' => 'required|email',
            'password' => 'required|min:6|max:12',
            'confirm_password' => 'required|same:password',
            'mobile' => 'numeric|required|digits:10'
        ]);
        $result = DB::table('users')
            ->where('email', $req->input('email'))
            ->get();

        $res = json_decode($result, true);

        if (sizeof($res) == 0) {
            $data = $req->input();
            $user = new User;
            $user->name = $data['name'];
            $user->email = $data['email'];
            // $encrypted_password = crypt::encrypt($data['password']);
            // $user->password = $encrypted_password;
            $user->password = $data['password'];
            // $user->mobile = $data['mobile'];
            $user->save();
            $req->session()->flash('register_status', 'User has been registered successfully');
            return redirect('/register');
        } else {
            $req->session()->flash('register_status', 'This Email already exists.');
            return redirect('/register');
        }
    }

    function login(Request $req)
    {
        $validatedData = $req->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $result = DB::table('users')
            ->where('email', $req->input('email'))
            ->get();

        $res = json_decode($result, true);
        // print_r($res);

        if (sizeof($res) == 0) {
            $req->session()->flash('error', 'Email Id does not exist. Please register yourself first');
            echo "Email Id Does not Exist.";
            return redirect('login');
        } else {
            echo "Hello";
            // $encrypted_password = $result[0]->password;
            // $decrypted_password = crypt::decrypt($encrypted_password);
            $decrypted_password = $result[0]->password;
            if ($decrypted_password == $req->input('password')) {
                    echo "You are logged in Successfully";
                    $req->session()->put('user', $result[0]->name);
                    $posts = \App\Models\Post::all();
                    $data = array('posts' => $posts);
                    return View::make("studenthome")->with($data);
                    // return redirect('/studenthome');
            } else {
                $req->session()->flash('error', 'Password Incorrect!!!');
                echo "Email Id Does not Exist.";
                return redirect('login');
            }
        }
    }
    
    //Home
    function homeProd(Request $req)
    {
        $trendingProducts = DB::table('products')
            ->where('category', 'trending')
            ->get();
        $latestProducts = DB::table('products')
            ->where('category', 'latest')
            ->get();  
        $generalProducts = DB::table('products')
            ->whereNotIn('category', ['trending','latest'])
            ->get();  
       $promotions = DB::table('promotions')
            ->limit(1)
            ->get();

        $trendingProducts = json_decode($trendingProducts, true);
        $latestProducts = json_decode($latestProducts, true);    
        $generalProducts = json_decode($generalProducts, true);  
        $promotions = json_decode($promotions, true);
        return json_encode(['trending_products' => $trendingProducts, 'latest_products' => $latestProducts, 'general_products' => $generalProducts, 'promotion' => $promotions]);   
    }
    //Home

    function products(Request $req)
    {
        $products = DB::table('products')
            ->get();
        return $products;
    }

    //Business Owner

    function productsBO(Request $req)
    {
        $productsBO = DB::table('products')
            ->where('owner_user_name', $req->input('User_name'))
            ->get();
        return $productsBO;
    }

    function posts(Request $req)
    {
        $posts = DB::table('posts')
            ->get();
        return $posts;
    }

    function getSingleProdBusiness(Request $req)
    {
        $getSingleProd = DB::table('products')
            ->where('p_id', $req->input('Product_id'))
            ->get();
        return $getSingleProd;
    }

    function deleteProdBusiness(Request $req)
    {
        $getSingleProd = DB::table('products')
            ->where('p_id', $req->input('Product_id'))
            ->delete();
    }

    function updateProdDetBusiness(Request $req)
    {
        $res = \App\Models\Product::where('p_id', '=', $req->input('pid'))
            ->update([
                'p_name' => $req->input('pname'),
                'p_description' => $req->input('pdesc'),
                'price_per_unit' => $req->input('ppu'),
                'quantity' => $req->input('quant')
            ]);

        if ($res) {
            return json_encode(['status' => 1]);
        } else {
            json_encode(['status' => 0]);
        }
        
    }

    function addNewProductBusiness(Request $req)
    {
        //$products = \App\Models\Product::all();
        $prodCount = DB::table('products')->count();
        Log::channel('stderr')->info($prodCount);
        $prod_id = 'product_'. ($prodCount + 1);
        Log::channel('stderr')->info($prod_id);
        $userData = array(
            'p_id' => $prod_id,
            'p_name' => $req->input('prod_name'),
            'p_description' => $req->input('prod_desc'),
            'quantity' => $req->input('quant'),
            'price_per_unit' => $req->input('ppu'),
            'p_img' => $req->input('prodImageUrl'),
            'owner_user_name' => $req->input('User_name')
        );
        $res = \App\Models\Product::create($userData);
        if ($res) {
            return json_encode(['status' => 1]);
        } else {
            return json_encode(['status' => 0]);
        }
    }

    function updateBusinessOwnerDet(Request $req)
    {
        $res = \App\Models\BusinessOwner::where('User_name', '=', $req->input('SAuserName'))
        ->update([
            'FName' => $req->input('SAfirstName'),
            'LName' => $req->input('SAlastName'),
            'Mobile' => $req->input('SAmobile'),
            'Mail_id' => $req->input('SAmailId'),
            'Address' => $req->input('SAaddress')
        ]);

        if ($res) {
            return json_encode(['status' => 1]);
        } else {
            json_encode(['status' => 0]);
        }
    }
    //Business Owner

    //School Admin

    function getAllclubs(Request $req)
    {
        $club = DB::table('club')
            ->get();
        return $club;
    }

    function getAllbusinessOwner(Request $req)
    {
        $businessOwner = DB::table('business_owner')
            ->get();
        return $businessOwner;
    }

    function getAllstudents(Request $req)
    {
        $getStudents = DB::table('student')
            ->get();
        return $getStudents;
    }

    function schAdminupdateBusinessOwnerDet(Request $req)
    {
        $res = \App\Models\BusinessOwner::where('User_name', '=', $req->input('User_name'))
        ->update([
            'FName' => $req->input('BOfirstName'),
            'LName' => $req->input('BOlastName'),
            'Mobile' => $req->input('BOmobile'),
            'Mail_id' => $req->input('BOmailId'),
            'Address' => $req->input('BOaddress')
        ]);

        if ($res) {
            return json_encode(['status' => 1]);
        } else {
            json_encode(['status' => 0]);
        }
    }

    function schAdminupdateStudentDet(Request $req)
    {
        $res = \App\Models\Student::where('User_name', '=', $req->input('StuserName'))
        ->update([
            'FName' => $req->input('StfirstName'),
            'LName' => $req->input('StlastName'),
            'Mobile' => $req->input('Stmobile'),
            'Mail_id' => $req->input('StmailId'),
            'Address' => $req->input('Staddress')
        ]);

        if ($res) {
            return json_encode(['status' => 1]);
        } else {
            json_encode(['status' => 0]);
        }
    }

    //School Admin

    //Super Admin
    function getAllschAdmin(Request $req)
    {
        $getScha = DB::table('school_admin')
            ->get();
        return $getScha;
    }

    function superAdminUpdateschaDetails(Request $req)
    {
        $res = \App\Models\SchoolAdmin::where('User_name', '=', $req->input('SCHAuserName'))
        ->update([
            'FName' => $req->input('SCHAfirstName'),
            'LName' => $req->input('SCHAlastName'),
            'Mobile' => $req->input('SCHAmobile'),
            'Mail_id' => $req->input('SCHAmailId'),
            'Address' => $req->input('SCHAaddress')
        ]);

        if ($res) {
            return json_encode(['status' => 1]);
        } else {
            json_encode(['status' => 0]);
        }
    }
    //Super Admin

    function promotions(Request $req)
    {
        $products = \App\Models\Promotion::all();
        return json_encode($promotions);
    }

    function studentclubs(Request $req)
    {
        $club_students_id = DB::table('club_students')
            ->where('st_user_name', $req->input('User_name'))
            ->get(['club_id']);
        $club_students_id =  Arr::pluck(array_values(json_decode($club_students_id, true)), 'club_id');
        $rows_clubs = DB::table('club')
            ->whereIn('club_id', $club_students_id)
            ->get();
        $rows_non_clubs = DB::table('club')
            ->whereNotIn('club_id', $club_students_id)
            ->get();

        $rows_clubs = json_decode($rows_clubs, true);
        $rows_non_clubs = json_decode($rows_non_clubs, true);
        return json_encode(['status' => 1, 'clubs' => $rows_clubs, 'non_clubs' => $rows_non_clubs]);
    }

    function studentcreatedclubs(Request $req)
    {
        $club_students_id = DB::table('club')
            ->where('owner_user_name', $req->input('User_name'))
            ->get();
        return $club_students_id;
    }

    function studentleaveclub(Request $req)
    {
        return DB::table('club_students')
            ->where('club_id', '=', $req->input('Club_id'))
            ->where('st_user_name', '=', $req->input('User_name'))
            ->delete();
    }

    function studentjoinclub(Request $req)
    {
        $userData = array('club_id' => $req->input('Club_id'), 'st_user_name' => $req->input('User_name'));
        return \App\Models\ClubStudent::create($userData);
    }

    function studentdeleteclub(Request $req)
    {
        DB::table('club_students')
            ->where('club_id', '=', $req->input('Club_id'))
            ->delete();
        return DB::table('club')
            ->where('club_id', '=', $req->input('Club_id'))
            ->delete();
    }

    function studentcreateclub(Request $req)
    {
        $clubs = \App\Models\Club::all();
        $club_id = 'club_' . ($clubs->count() + 1);
        $userData = array(
            'club_id' => $club_id,
            'club_name' => $req->input('Club_name'),
            'club_description' => $req->input('Club_description'),
            'owner_user_name' => $req->input('User_name'),
            'club_creation_date' => '2022-11-05',
            'club_img' => $req->input('Club_img')
        );
        $res = \App\Models\Club::create($userData);
        if ($res) {
            return json_encode(['status' => 1]);
        } else {
            json_encode(['status' => 0]);
        }


        return \App\Models\Club::create($userData);
    }

    function studentcart(Request $req)
    {
        $student_cart_ids = DB::table('student_cart')
            ->where('student_user_name', $req->input('User_name'))
            ->get(['p_id']);
        $student_cart_ids =  Arr::pluck(array_values(json_decode($student_cart_ids, true)), 'p_id');
        $products = DB::table('products')
            ->select('products.*', 'student_cart.quantity as cart_p_quantity')
            ->whereIn('products.p_id', $student_cart_ids)
            ->join(
                'student_cart',
                function ($join) {
                    $join->on('products.p_id', '=', 'student_cart.p_id');
                }
            )
            ->get();
        return $products;
    }

    function studentcartupdate(Request $req)
    {
        \App\Models\StudentCart::where('student_user_name', '=', $req->input('User_name'))
            ->where('p_id', '=', $req->input('Product_id'))
            ->update([
                'quantity' => $req->input('Quantity')
            ]);

        $student_cart_ids = DB::table('student_cart')
            ->where('student_user_name', $req->input('User_name'))
            ->get(['p_id']);
        $student_cart_ids =  Arr::pluck(array_values(json_decode($student_cart_ids, true)), 'p_id');
        $products = DB::table('products')
            ->select('products.*', 'student_cart.quantity as cart_p_quantity')
            ->whereIn('products.p_id', $student_cart_ids)
            ->join(
                'student_cart',
                function ($join) {
                    $join->on('products.p_id', '=', 'student_cart.p_id');
                }
            )
            ->get();
        return $products;
    }

    function studentactiveorders(Request $req)
    {
        // select * from products where p_id in 
        // (select product_id from student_order_products where student_user_name  = 'student@mavs.uta.edu' group by order_id)

        $student_order_products_ids = DB::table('student_order_products')
            ->where('student_user_name', $req->input('User_name'))
            ->get(['product_id']);
        $student_order_products_ids =  Arr::pluck(array_values(json_decode($student_order_products_ids, true)), 'product_id');

        $products = DB::table('products')
            ->whereIn('p_id', $student_order_products_ids)
            ->get();
        return $products;
    }

    function studentinactiveorders(Request $req)
    {
        // select * from products where p_id in 
        // (select product_id from student_order_products where student_user_name  = 'student@mavs.uta.edu' and order_id in 
        // (select order_id from student_orders where status != 'success'));
        $student_order_ids = DB::table('student_orders')
            ->where('status', '!=', 'success')
            ->get(['order_id']);
        $student_order_ids =   Arr::pluck(array_values(json_decode($student_order_ids, true)), 'order_id');
        $student_order_products_ids = DB::table('student_order_products')
            ->where('student_user_name', $req->input('User_name'))
            ->whereIn('order_id', $student_order_ids)
            ->get(['product_id']);
        $student_order_products_ids =  Arr::pluck(array_values(json_decode($student_order_products_ids, true)), 'product_id');

        $products = DB::table('products')
            ->whereIn('p_id', $student_order_products_ids)
            ->get();
        return $products;
    }

    function studentdeletefromcart(Request $req)
    {
        $res =  DB::table('student_cart')
            ->where('p_id', '=', $req->input('Product_id'))
            ->where('student_user_name', '=', $req->input('User_name'))
            ->delete();
            if ($res) {
                return json_encode(['status' => 1]);
            } else {
                json_encode(['status' => 0]);
            }
    }

    function studentaddtocart(Request $req)
    {
        $student_cart = DB::table('student_cart')
            ->where('student_user_name', '=', $req->input('User_name'))
            ->where('p_id', '=', $req->input('Product_id'))
            ->get(['quantity']);
            Log::channel('stderr')->info($student_cart);    
        if ($student_cart->count() > 0) {
            $qty =  Arr::pluck(array_values(json_decode($student_cart, true)), 'quantity');
            Log::channel('stderr')->info($qty);
            $qty = $qty[0] + 1;
            \App\Models\StudentCart::where('student_user_name', '=', $req->input('User_name'))
                ->where('p_id', '=', $req->input('Product_id'))
                ->update([
                    'quantity' => $qty
                ]);
            $student_cart = DB::table('student_cart')
                ->where('student_user_name', '=', $req->input('User_name'))
                ->where('p_id', '=', $req->input('Product_id'))
                ->get();
            return json_encode(['status' => 1]);
        } else {
            Log::channel('stderr')->info($req->input('User_name'));
            $userData = array(
                'student_user_name' => $req->input('User_name'),
                'p_id' => $req->input('Product_id'),
                'quantity' => 1
            );
           /* $res = \App\Models\StudentCart::create($userData);
            $student_cart = DB::table('student_cart')
                ->where('student_user_name', '=', $req->input('User_name'))
                ->where('p_id', '=', $req->input('Product_id'))
                ->get(); */
                $data = $req->input();
                $user = new  \App\Models\StudentCart;
                $user->p_id = $data['Product_id'];
                $user->student_user_name = $data['User_name'];
                $user->quantity = 1;
                $out = $user->save();    
            return json_encode(['status' => 1]);
        }
    }
}
