<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Club
 * 
 * @property string $club_id
 * @property string $club_name
 * @property string|null $club_description
 * @property string|null $owner_user_name
 * @property Carbon|null $club_creation_date
 * @property string|null $club_img
 * 
 * @property Customer|null $customer
 * @property Collection|Student[] $students
 *
 * @package App\Models
 */
class Club extends Model
{
	protected $table = 'club';
	protected $primaryKey = 'club_id';
	public $incrementing = false;
	public $timestamps = false;

	protected $dates = [
		'club_creation_date'
	];

	protected $fillable = [
		'club_id',
		'club_name',
		'club_description',
		'owner_user_name',
		'club_creation_date',
		'club_img'
	];

	public function customer()
	{
		return $this->belongsTo(Customer::class, 'owner_user_name');
	}

	public function students()
	{
		return $this->belongsToMany(Student::class, 'club_students', 'club_id', 'st_user_name')
			->withPivot('st_joined_date');
	}
}
