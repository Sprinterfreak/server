<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCP\Group\Backend;

/**
 * @since 14.0.0
 */
interface ICountUsersBackend {
	/**
	 * @since 14.0.0
	 */
	public function countUsersInGroup(string $gid, string $search = ''): int;
}
