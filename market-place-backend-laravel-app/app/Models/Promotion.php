<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Promotion
 * 
 * @property string $pm_id
 * @property string $pm_name
 * @property string|null $pm_description
 * @property string|null $pm_img
 * @property string|null $pm_url
 * @property string|null $owner_user_name
 * 
 * @property BusinessOwner|null $business_owner
 *
 * @package App\Models
 */
class Promotion extends Model
{
	protected $table = 'promotions';
	protected $primaryKey = 'pm_id';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'pm_name',
		'pm_description',
		'pm_img',
		'pm_url',
		'owner_user_name'
	];

	public function business_owner()
	{
		return $this->belongsTo(BusinessOwner::class, 'owner_user_name');
	}
}
