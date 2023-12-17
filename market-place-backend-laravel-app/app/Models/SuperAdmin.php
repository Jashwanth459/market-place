<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class SuperAdmin
 * 
 * @property string $sua_id
 * @property string $User_name
 * @property string $FName
 * @property string|null $LName
 * @property string|null $Mobile
 * @property string|null $Mail_id
 * @property string|null $Address
 * 
 * @property Customer $customer
 * @property Collection|BusinessOwner[] $business_owners
 * @property Collection|SchoolAdmin[] $school_admins
 * @property Collection|Student[] $students
 *
 * @package App\Models
 */
class SuperAdmin extends Model
{
	protected $table = 'super_admin';
	protected $primaryKey = 'User_name';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'sua_id',
		'FName',
		'LName',
		'Mobile',
		'Mail_id',
		'Address'
	];

	public function customer()
	{
		return $this->belongsTo(Customer::class, 'User_name');
	}

	public function business_owners()
	{
		return $this->hasMany(BusinessOwner::class, 'sua_user_name');
	}

	public function school_admins()
	{
		return $this->hasMany(SchoolAdmin::class, 'sua_user_name');
	}

	public function students()
	{
		return $this->hasMany(Student::class, 'sua_user_name');
	}
}
