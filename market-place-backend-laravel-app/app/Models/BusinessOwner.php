<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class BusinessOwner
 * 
 * @property string $Bo_id
 * @property string $User_name
 * @property string $FName
 * @property string|null $LName
 * @property string|null $Mobile
 * @property string|null $Mail_id
 * @property string|null $Address
 * @property string|null $Business_name
 * @property string|null $sua_user_name
 * @property string|null $s_user_name
 * 
 * @property Customer $customer
 * @property SuperAdmin|null $super_admin
 * @property SchoolAdmin|null $school_admin
 * @property Collection|Product[] $products
 * @property Collection|Promotion[] $promotions
 *
 * @package App\Models
 */
class BusinessOwner extends Model
{
	protected $table = 'business_owner';
	protected $primaryKey = 'User_name';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'Bo_id',
		'FName',
		'LName',
		'Mobile',
		'Mail_id',
		'Address',
		'Business_name',
		'sua_user_name',
		's_user_name'
	];

	public function customer()
	{
		return $this->belongsTo(Customer::class, 'User_name');
	}

	public function super_admin()
	{
		return $this->belongsTo(SuperAdmin::class, 'sua_user_name');
	}

	public function school_admin()
	{
		return $this->belongsTo(SchoolAdmin::class, 's_user_name');
	}

	public function products()
	{
		return $this->hasMany(Product::class, 'owner_user_name');
	}

	public function promotions()
	{
		return $this->hasMany(Promotion::class, 'owner_user_name');
	}
}
